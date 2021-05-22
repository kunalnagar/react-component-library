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
  /**
   * The post's URL.
   */
  url: string
  /**
   * If your app must access the oEmbed endpoint from a user agent such as a
   * mobile device or web browser, your app must use a Client Access Token and
   * will be subject to Client Token Rate Limits.
   *
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
  hideCaption,
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
      const data = JSON.parse(await response.text())
      setHtml(data.html)
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
