import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const IconSVG = styled.svg`
  stroke-width: 6px;
  fill: none;
  stroke: white;
  stroke-linecap: round;
`

export const ExternalLinkIcon: FunctionComponent<{ className?: string }> = (props) => (
  <IconSVG className={props.className} viewBox="0 0 64 64">
    {/* Box */}
    <line x1="5" y1="10" x2="35" y2="10"></line>
    <line x1="53" y1="28" x2="53" y2="58"></line>
    <line x1="53" y1="58" x2="5" y2="58"></line>
    <line x1="5" y1="58" x2="5" y2="10"></line>

    {/* Arrow */}
    <line x1="30" y1="34" x2="58.5" y2="4"></line>
    <line x1="38.5" y1="4" x2="58.5" y2="4"></line>
    <line x1="58.5" y1="4" x2="58.5" y2="24"></line>
  </IconSVG>
)
