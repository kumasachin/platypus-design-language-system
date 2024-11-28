import React from 'react'
import { SvgIcon, SvgIconTypeMap, SvgIconProps } from '@mui/material'
import styled from 'styled-components'
export interface SVGProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string
    }
  >
}
export const SVGIcon = ({ Icon }: SVGProps) => <SvgIcon data-dls="atom-svg-icon" component={Icon} />
