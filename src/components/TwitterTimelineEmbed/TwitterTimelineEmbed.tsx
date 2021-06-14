import React, { useEffect, useState, useRef } from 'react'
import { TwitterTimelineEmbedProps } from 'types'
import { loadScript } from 'utils/loadScript'

export const TwitterTimelineEmbed = ({
  sourceType,
  screenName,
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
}: TwitterTimelineEmbedProps) => {
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
            ownerScreenName: sourceType === 'list' ? screenName : undefined,
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
