/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    instgrm: any
  }
}

export interface InstagramPostEmbedProps {
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
