/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-danger */
import React, { useEffect, useState, useRef } from 'react'
import { loadScript } from 'utils/loadScript'

declare global {
  interface Window {
    twttr: any
  }
}

/**
 * This component uses the Twitter oEmbed API: https://developer.twitter.com/en/docs/twitter-for-websites/oembed-api
 */
interface Props {
  /**
   * The ID of the desired Tweet.
   */
  id: string
  /**
   * When set to hidden, links in a Tweet are not expanded to photo, video, or
   * link previews.
   */
  cards?: 'hidden'
  /**
   * When set to none, only the cited Tweet will be displayed even if it is in
   * reply to another Tweet.
   */
  conversation?: 'none'
  /**
   * When set to dark, displays Tweet with light text over a dark background.
   */
  theme?: 'dark'
  /**
   * The maximum width of the rendered Tweet in whole pixels. This value should
   * be between 250 and 550 pixels.
   */
  width?: number
  /**
   * Float the Tweet left, right, or center relative to its container.
   * Typically set to allow text or other content to wrap around the Tweet.
   */
  align?: 'left' | 'center' | 'right'
  /**
   * A supported Twitter language code. Loads text components in the specified
   * language. Note: does not affect the text of the cited Tweet.
   *
   * @link https://developer.twitter.com/en/docs/twitter-for-websites/supported-languages
   */
  lang?: string
  /**
   * When set to true, the Tweet and its embedded page on your site are not
   * used for purposes that include personalized suggestions and personalized
   * ads.
   */
  dnt?: boolean
}

export const TwitterTweetEmbed = ({
  id,
  cards,
  conversation,
  theme,
  width,
  align,
  lang,
  dnt,
}: Props) => {
  const [ready, setReady] = useState<boolean>(false)
  const embedContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function createTweet() {
      if (ready) {
        const params = {
          cards,
          conversation,
          theme,
          width,
          align,
          lang,
          dnt,
          omit_script: true,
        }
        if (embedContainer.current) {
          embedContainer.current.innerHTML = ''
        }
        await window.twttr.widgets.createTweet(
          id,
          embedContainer.current,
          params,
        )
      }
    }
    createTweet()
  }, [align, cards, conversation, dnt, id, lang, ready, theme, width])

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
