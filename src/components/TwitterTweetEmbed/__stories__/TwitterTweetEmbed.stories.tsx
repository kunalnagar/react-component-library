import React from 'react'
import { TwitterTweetEmbed } from '..'

export default {
  title: 'TwitterTweetEmbed',
}

export const Default = () => (
  <>
    <TwitterTweetEmbed id="20" />
  </>
)

export const Multiple = () => (
  <>
    <TwitterTweetEmbed id="20" />
    <TwitterTweetEmbed id="21" />
  </>
)

export const WithCard = () => (
  <>
    <TwitterTweetEmbed id="1247616214769086465" />
  </>
)

export const WithCardHidden = () => (
  <>
    <TwitterTweetEmbed id="1247616214769086465" cards="hidden" />
  </>
)

export const InConversation = () => (
  <>
    <TwitterTweetEmbed id="1247616215528300545" />
  </>
)

export const WithoutConversation = () => (
  <>
    <TwitterTweetEmbed id="1247616215528300545" conversation="none" />
  </>
)

export const DarkTheme = () => (
  <>
    <TwitterTweetEmbed id="20" theme="dark" />
  </>
)

export const Width250 = () => (
  <>
    <TwitterTweetEmbed id="20" width={250} />
  </>
)

export const Width550 = () => (
  <>
    <TwitterTweetEmbed id="20" width={550} />
  </>
)

export const AlignLeft = () => (
  <>
    <TwitterTweetEmbed id="20" align="left" />
  </>
)

export const AlignCenter = () => (
  <>
    <TwitterTweetEmbed id="20" align="center" />
  </>
)

export const AlignRight = () => (
  <>
    <TwitterTweetEmbed id="20" align="right" />
  </>
)

export const LanguageES = () => (
  <>
    <TwitterTweetEmbed id="20" lang="es" />
  </>
)

export const Ads = () => (
  <>
    <TwitterTweetEmbed id="20" dnt />
  </>
)
