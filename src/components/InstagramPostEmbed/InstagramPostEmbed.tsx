/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { stringify } from 'querystring'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instgrm: any
  }
}

interface IInstagramFeed {
  url: string
  clientAccessToken: string
}

export const InstagramPostEmbed = ({
  url,
  clientAccessToken,
}: IInstagramFeed) => {
  const [html, setHtml] = useState('')

  const injectScript = (cb: () => void) => {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://platform.instagram.com/en_US/embeds.js`
    s.id = 'react-instagram-embed-script'
    s.addEventListener('load', cb)
    const { body } = document
    if (body) {
      body.appendChild(s)
    }
  }

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
        injectScript(() => {
          window.instgrm.Embeds.process()
        })
      } else {
        window.instgrm.Embeds.process()
      }
    }
  }, [html])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
