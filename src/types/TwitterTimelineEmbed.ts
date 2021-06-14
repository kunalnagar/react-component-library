/**
 * This component uses the Twitter Embedded timelines API: https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference
 */
interface BaseProps {
  /**
   * The screen name of the account
   */
  screenName: string
  /**
   * Show Tweets in response to another Tweet or account
   *
   * @default false
   */
  showReplies?: boolean
  /**
   * When set to none, only the cited Tweet will be displayed even if it is in
   * reply to another Tweet.
   */
  chrome?: Array<
    'noheader' | 'nofooter' | 'noborders' | 'transparent' | 'noscrollbar'
  >
  /**
   * Display light text on a dark background
   *
   * @default light
   */
  theme?: 'dark'
  /**
   * Set the maximum width of the embedded Tweet. It is derived from the
   * container size
   *
   * @default auto
   */
  width?: number
  /**
   * Set a fixed height of the embedded widget
   *
   * @default 600
   */
  height?: number
  /**
   * Render a timeline statically, displaying only n number of Tweets. The
   * height parameter has no effect when a Tweet limit is set
   *
   * Accepted values: [1..20]
   */
  tweetLimit?: number
  /**
   * Adjust the color of borders inside the widget. Hexadecimal color.
   */
  borderColor?: string
  /**
   * Apply the specified aria-polite behavior to the rendered timeline. New
   * Tweets may be added to the top of a timeline, affecting screen readers
   *
   * @default polite
   */
  ariaPolite?: 'polite' | 'assertive' | 'rude'
  /**
   * When set to true, the timeline and its embedded page on your site are not
   * used for purposes that include personalized suggestions and personalized
   * ads
   */
  dnt?: boolean
}

type VariableProps =
  | {
      sourceType: 'list'
      slug: string
    }
  | {
      sourceType: 'profile'
      slug?: never
    }

export type TwitterTimelineEmbedProps = BaseProps & VariableProps
