import React, { useEffect, useState, useRef } from 'react'
import { TwitterTweetEmbedProps } from 'types'
import { loadScript } from 'utils/loadScript'

/**
 * This component uses the Twitter Embedded Tweets API: https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-javascript-factory-function
 */
export const TwitterTweetEmbed = ({
  id,
  cards,
  conversation,
  theme,
  width,
  align,
  lang,
  dnt,
}: TwitterTweetEmbedProps) => {
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
