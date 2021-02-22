import styled, { Theme } from 'styled-components'

interface LoaderProps {
  readonly small?: boolean
  theme: Theme
}

// Loader courtesy of https://loading.io/css/
export const Loader = styled.div<LoaderProps>`
  margin: auto;

  display: inline-block;
  width: ${({ small }: LoaderProps): string => (small ? '40px' : '80px')};
  height: ${({ small }: LoaderProps): string => (small ? '40px' : '80px')};

  :after {
    content: ' ';
    display: block;
    width: ${({ small }: LoaderProps): string => (small ? '20px' : '64px')};
    height: ${({ small }: LoaderProps): string => (small ? '20px' : '64px')};
    margin: 8px;
    border-radius: 50%;
    border: ${({ small, theme }: LoaderProps): string => `${small ? '3px' : '6px'} solid ${theme.secondary}`};
    border-color: ${(props): string => `${props.theme.secondary} transparent ${props.theme.secondary} transparent`};
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
