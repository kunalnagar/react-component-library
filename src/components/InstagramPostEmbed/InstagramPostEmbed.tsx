/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { loadScript } from 'utils/loadScript'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instgrm: any
  }
}

interface Props {
  url: string
  clientAccessToken: string
}

export const InstagramPostEmbed = ({ url, clientAccessToken }: Props) => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    async function fetchEmbed() {
      const params = {
        url,
        access_token: clientAccessToken,
        omitscript: true,
      }
      const response = await fetch(
        `https://graph.facebook.com/v10.0/instagram_oembed/?${stringify(
          params,
        )}`,
        {
          method: 'GET',
        },
      )
      const data = JSON.parse(await response.text())
      setHtml(data.html)
    }
    fetchEmbed()
  }, [url, clientAccessToken])

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
