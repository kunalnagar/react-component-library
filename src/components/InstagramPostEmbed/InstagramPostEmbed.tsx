/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { loadScript } from 'utils/loadScript'
import { InstagramPostEmbedProps } from 'types'

/**
 * This component uses the Instagram Oembed API: https://developers.facebook.com/docs/graph-api/reference/instagram-oembed
 * Error codes: https://developers.facebook.com/docs/graph-api/using-graph-api/error-handling
 */
export const InstagramPostEmbed = ({
  url,
  clientAccessToken,
  hideCaption = false,
  maxWidth,
}: InstagramPostEmbedProps) => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    async function fetchEmbed() {
      const params = {
        url,
        access_token: clientAccessToken,
        omitscript: true,
        hidecaption: hideCaption,
        maxwidth: maxWidth,
      }
      const response = await fetch(
        `https://graph.facebook.com/v10.0/instagram_oembed/?${stringify(
          params,
        )}`,
        {
          method: 'GET',
        },
      )
      const data = await response.json()
      if (response.ok && data) {
        setHtml(data.html)
      } else {
        const { error } = data
        setHtml(
          `${error.message} ${
            error.error_user_msg ? error.error_user_msg : ''
          }`,
        )
        console.error(error)
      }
    }
    fetchEmbed()
  }, [url, clientAccessToken, hideCaption, maxWidth])

  useEffect(() => {
    if (html) {
      if (typeof window.instgrm === 'undefined') {
        loadScript(
          {
            url: 'https://platform.instagram.com/en_US/embeds.js',
            id: 'react-instagram-embed',
            async: true,
          },
          () => {
            window.instgrm.Embeds.process()
          },
        )
      } else {
        window.instgrm.Embeds.process()
      }
    }
  }, [html])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
