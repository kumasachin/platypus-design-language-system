// .storybook/preview.tsx
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router'
import type { Preview } from '@storybook/react'
import Providers from '.src/providers'

// import { withA11y } from '@storybook/addon-a11y' // Accessibility addon
// import { withTests } from '@storybook/addon-jest' // Jest test results addon
// import { GlobalStyle } from '../src/styles/GlobalStyle' // Example global styles import
import { ThemeProvider } from 'styled-components' // Example theme provider for styled-components

// Import your themes (example with styled-components)
// import { theme } from '../src/styles/theme'

const preview: Preview = {
  // Global decorators to wrap your stories
  decorators: [
    // Add accessibility panel globally to all stories
    // withA11y,

    // Add Jest test results for all stories (if you have jest tests set up)
    // withTests,

    // Example global wrapper for styled-components theme
    (Story) => (
      <Providers storybook>
        <MemoryRouter>
          <Routes>
            <Route element={Story()} path="*" />
          </Routes>
        </MemoryRouter>
        <Story />
      </Providers>
    ),
  ],

  // Global parameters (you can control things like layout, controls, etc.)
  parameters: {
    // Controls for Storybook to automatically generate controls for props
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true, // Expand the controls by default
    },
    // Docs options to customize the behavior of docs rendering
    docs: {
      inlineStories: true, // Render the stories inline within the docs tab
    },
    // Storybook accessibility options
    a11y: {
      element: '#root', // Where the accessibility checks should happen
    },
  },
}

export default preview
