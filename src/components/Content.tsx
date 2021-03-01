import styled from 'styled-components'

export const Paragraph = styled.p`
  margin: 0 0 10px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;

  color: ${(props): string => props.theme.text};
`

export const Title = styled.h1`
  margin: 10px 0 25px 0;
  font-style: underline;
  text-align: center;
  color: ${(props): string => props.theme.text};
`
