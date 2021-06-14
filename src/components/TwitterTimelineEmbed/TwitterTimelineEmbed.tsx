/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from 'react'
import { loadScript } from 'utils/loadScript'

declare global {
  interface Window {
    twttr: any
  }
}

enum Chrome {
  noheader = 'noheader',
  nofooter = 'nofooter',
}

/**
 * This component uses the Twitter Embedded timelines API: https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference
 */
interface BaseProps {
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
  chrome?: Chrome[]
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

type ListProps =
  | {
      sourceType: 'list'
      ownerScreenName: string
      screenName?: never
      slug: string
    }
  | {
      sourceType: 'profile'
      ownerScreenName?: never
      screenName: string
      slug?: never
    }

type Props = BaseProps & ListProps

export const TwitterTimelineEmbed = ({
  sourceType,
  screenName,
  ownerScreenName,
  slug,
  showReplies = false,
  chrome,
  theme,
  width,
  height = 600,
  tweetLimit,
  borderColor,
  ariaPolite = 'polite',
  dnt = false,
}: Props) => {
  const [ready, setReady] = useState<boolean>(false)
  const embedContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function createTimeline() {
      if (ready) {
        const params = {
          showReplies,
          chrome,
          theme,
          width,
          height,
          tweetLimit,
          borderColor,
          ariaPolite,
          dnt,
          omit_script: true,
        }
        if (embedContainer.current) {
          embedContainer.current.innerHTML = ''
        }
        await window.twttr.widgets.createTimeline(
          {
            sourceType,
            screenName: sourceType === 'profile' ? screenName : undefined,
            ownerScreenName:
              sourceType === 'list' ? ownerScreenName : undefined,
            slug: sourceType === 'list' ? slug : undefined,
          },
          embedContainer.current,
          params,
        )
      }
    }
    createTimeline()
  }, [
    ariaPolite,
    borderColor,
    chrome,
    dnt,
    height,
    ownerScreenName,
    ready,
    screenName,
    showReplies,
    slug,
    sourceType,
    theme,
    tweetLimit,
    width,
  ])

  useEffect(() => {
    if (typeof window.twttr === 'undefined') {
      loadScript(
        {
          url: 'https://platform.twitter.com/widgets.js',
          id: 'twitter-wjs',
          async: true,
        },
        () => {
          setReady(true)
        },
      )
    } else {
      setReady(true)
    }
  }, [])

  return <div ref={embedContainer} />
}
