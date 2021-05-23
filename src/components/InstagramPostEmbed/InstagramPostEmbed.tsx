/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { loadScript } from 'utils/loadScript'

declare global {
  interface Window {
    instgrm: any
  }
}

/**
 * This component uses the Instagram Oembed API: https://developers.facebook.com/docs/graph-api/reference/instagram-oembed
 * Error codes: https://developers.facebook.com/docs/graph-api/using-graph-api/error-handling
 */
interface Props {
  /**
   * The post's URL.
   */
  url: string
  /**
   * To get a Client Access Token, sign into your App Dashboard and navigate to
   * Settings > Advanced > Security > Client Token.
   *
   * Unlike App Access Tokens, Client Access Tokens cannot be used in oEmbed
   * endpoint requests on their own, they must be combined with your App ID.
   * To do this, append your token to the end of your App ID, separated by a
   * pipe symbol (|):
   *
   * For e.g.: {app-id}|{client-token}
   */
  clientAccessToken: string
  /**
   * If set to true, the embed code hides the caption. Defaults to false if
   * parameter is not included in request.
   */
  hideCaption?: boolean
  /**
   * Maximum width of returned media. Must be between 320 and 658. Note that the
   * maxheight parameter is not supported. This is because the embed code is
   * responsive and its height varies depending on its width and length of the
   * caption.
   */
  maxWidth?: number
}

export const InstagramPostEmbed = ({
  url,
  clientAccessToken,
  hideCaption = false,
  maxWidth,
}: Props) => {
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
