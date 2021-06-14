import React from 'react'
import { TwitterTimelineEmbed } from '..'

export default {
  title: 'TwitterTimelineEmbed',
}

export const Profile = () => (
  <>
    <TwitterTimelineEmbed sourceType="profile" screenName="twitterdev" />
  </>
)

export const List = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="list"
      ownerScreenName="twitterdev"
      slug="national-parks"
    />
  </>
)

export const ShowReplies = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      showReplies
    />
  </>
)

export const ChromeNoHeaderNoFooter = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      chrome={['noheader', 'nofooter']}
    />
  </>
)

export const DarkTheme = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      theme="dark"
    />
  </>
)

export const Width250px = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      width={250}
    />
  </>
)

export const Height400px = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      height={400}
    />
  </>
)

export const TweetLimit3 = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      tweetLimit={3}
    />
  </>
)

export const BorderColorRed = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      borderColor="#FF0000"
    />
  </>
)

export const AriaPoliteAssertive = () => (
  <>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="twitterdev"
      ariaPolite="assertive"
    />
  </>
)

export const Dnt = () => (
  <>
    <TwitterTimelineEmbed sourceType="profile" screenName="twitterdev" dnt />
  </>
)
