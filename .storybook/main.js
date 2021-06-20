const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|ts)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
  ],
  typescript: {
    reactDocgen: 'react-docgen', // https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-857887751
  }
}
