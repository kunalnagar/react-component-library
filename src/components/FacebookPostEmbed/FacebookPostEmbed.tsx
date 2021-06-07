/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { loadScript } from 'utils/loadScript'

declare global {
  interface Window {
    FB: any
  }
}

interface Props {
  /**
   * The absolute URL of the post.
   */
  url: string
  /**
   * The width of the post. Min. 350 pixel; Max. 750 pixel. Leave empty to use
   * fluid width.
   */
  width?: number
  /**
   * true means use the browser's lazy-loading mechanism by setting the
   * loading="lazy" iframe attribute. The effect is that the browser does not
   * render the plugin if it's not close to the viewport and might never be
   * seen. Can be one of true or false (default).
   *
   * @default false
   */
  shouldLazyLoad?: boolean
  /**
   * Applied to photo post. Set to true to include the text from the Facebook
   * post, if any.
   *
   * @default false
   */
  shouldShowText?: boolean
}

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
}: Props) => {
  useEffect(() => {
    if (typeof window.FB === 'undefined') {
      loadScript(
        {
          url: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2',
          id: 'facebook-js-sdk',
          async: true,
        },
        () => {
          window.FB.XFBML.parse()
        },
      )
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
