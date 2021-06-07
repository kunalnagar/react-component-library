import React from 'react'
import { FacebookPostEmbed } from '..'

export default {
  title: 'FacebookPostEmbed',
}

export const Default = () => (
  <>
    <FacebookPostEmbed url="https://www.facebook.com/20531316728/posts/10154009990506729/" />
  </>
)

export const Multiple = () => (
  <>
    <FacebookPostEmbed url="https://www.facebook.com/20531316728/posts/10154009990506729/" />
    <FacebookPostEmbed url="https://www.facebook.com/facebookappCanada/posts/4122268924477994" />
  </>
)

export const Lazy = () => (
  <>
    <FacebookPostEmbed
      url="https://www.facebook.com/20531316728/posts/10154009990506729/"
      shouldLazyLoad
    />
  </>
)

export const Width350 = () => (
  <>
    <FacebookPostEmbed
      url="https://www.facebook.com/20531316728/posts/10154009990506729/"
      width={350}
    />
  </>
)

export const Width750 = () => (
  <>
    <FacebookPostEmbed
      url="https://www.facebook.com/20531316728/posts/10154009990506729/"
      width={750}
    />
  </>
)

export const ShouldNotShowText = () => (
  <>
    <FacebookPostEmbed url="https://www.facebook.com/facebookappCanada/posts/4119045168133703" />
  </>
)

export const ShouldShowText = () => (
  <>
    <FacebookPostEmbed
      url="https://www.facebook.com/facebookappCanada/posts/4119045168133703"
      shouldShowText
    />
  </>
)
