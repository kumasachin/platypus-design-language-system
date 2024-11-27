import React, { Children } from 'react'
import { StyledEngineProvider } from '@mui/styled-engine'

const Providers = ({ children, storybook }: { storybook?: boolean; children: React.ReactNode }) => (
  <StyledEngineProvider>{children}</StyledEngineProvider>
)

export default Providers
