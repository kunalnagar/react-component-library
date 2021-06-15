/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { FacebookPostEmbedProps } from 'types'
import { loadScript } from 'utils/loadScript'

/**
 * Embedded Posts are a simple way to put public posts - by a Page or a person
 * on Facebook - into the content of your web site or web page. Only public
 * posts from Facebook Pages and profiles can be embedded.
 *
 * @link https://developers.facebook.com/docs/plugins/embedded-posts
 */
export const FacebookPostEmbed = ({
  url,
  width,
  shouldLazyLoad = false,
  shouldShowText = false,
}: FacebookPostEmbedProps) => {
  useEffect(() => {
    if (typeof window.FB === 'undefined') {
      loadScript({
        url: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2',
        id: 'facebook-js-sdk',
        async: true,
      })
    } else {
      window.FB.XFBML.parse()
    }
  }, [])

  return (
    <div
      className="fb-post"
      data-href={url}
      data-width={width}
      data-lazy={shouldLazyLoad}
      data-show-text={shouldShowText}
    />
  )
}
