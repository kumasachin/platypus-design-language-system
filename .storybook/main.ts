// .storybook/main.ts

import { StorybookConfig } from '@storybook/types'

const config: StorybookConfig = {
  // Specifies the Storybook framework (React in this case)
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // Addons you want to use for additional functionality
  addons: [
    // Link between stories
    '@storybook/addon-links', // Basic set of addons (Docs, Controls, Actions, etc.)
    '@storybook/addon-essentials', // Interactions for testing
    '@storybook/addon-interactions', // Accessibility testing
    '@storybook/addon-a11y', // Shows the source code for your stories
    '@storybook/addon-storysource',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],

  // Specifies where to find the stories
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],

  // Webpack or other configuration customizations
  webpackFinal: async (config) => {
    // Optionally modify Webpack configuration if needed
    return config
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen', // Specify the correct docgen library
  },
}

export default config
