/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    FB: any
  }
}

export interface FacebookPostEmbedProps {
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
