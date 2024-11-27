import React, { Children } from 'react'
import { StyledEngineProvider } from '@mui/styled-engine'

const Provider = ({ Children, storybook }: { storybook?: boolean; Children: React.ReactNode }) => (
  <StyledEngineProvider>{Children}</StyledEngineProvider>
)

export default Provider
