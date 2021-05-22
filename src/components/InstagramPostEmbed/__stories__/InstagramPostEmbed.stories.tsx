import React from 'react'
import { InstagramPostEmbed } from '..'

export default {
  title: 'InstagramPostEmbed',
}

const clientAccessToken = '316536800188783|f65679d89b5236a2b7174e1778fff7a4'

export const Default = () => (
  <>
    <InstagramPostEmbed
      url="https://www.instagram.com/p/CO_u0wftV4Q/"
      clientAccessToken={clientAccessToken}
    />
  </>
)

export const Multiple = () => (
  <>
    <InstagramPostEmbed
      url="https://www.instagram.com/p/CORs4wShENX/"
      clientAccessToken={clientAccessToken}
    />
    <InstagramPostEmbed
      url="https://www.instagram.com/p/CNyrgMsh3a2/"
      clientAccessToken={clientAccessToken}
    />
  </>
)

export const hideCaption = () => (
  <>
    <InstagramPostEmbed
      url="https://www.instagram.com/p/CNxdfcCB8Yb/"
      clientAccessToken={clientAccessToken}
      hideCaption
    />
  </>
)

export const maxWidth320 = () => (
  <>
    <InstagramPostEmbed
      url="https://www.instagram.com/p/CNxdfcCB8Yb/"
      clientAccessToken={clientAccessToken}
      maxWidth={320}
    />
  </>
)

export const maxWidth658 = () => (
  <>
    <InstagramPostEmbed
      url="https://www.instagram.com/p/CNxdfcCB8Yb/"
      clientAccessToken={clientAccessToken}
      maxWidth={658}
    />
  </>
)
