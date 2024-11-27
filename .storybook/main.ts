// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react/types'

const config: StorybookConfig = {
  // Specifies the Storybook framework (React in this case)
  framework: '@storybook/react',

  // Addons you want to use for additional functionality
  addons: [
    '@storybook/addon-links', // Link between stories
    '@storybook/addon-essentials', // Basic set of addons (Docs, Controls, Actions, etc.)
    '@storybook/addon-interactions', // Interactions for testing
    '@storybook/addon-a11y', // Accessibility testing
    '@storybook/addon-storysource', // Shows the source code for your stories
  ],

  // Specifies where to find the stories
  stories: [
    // Look for stories in the 'src' folder (adjust the path if necessary)
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  // Webpack or other configuration customizations
  webpackFinal: async (config) => {
    // Optionally modify Webpack configuration if needed
    return config
  },
}

export default config
