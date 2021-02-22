import 'styled-components'

declare module 'styled-components' {
  export interface Theme {
    primary: string
    secondary: string
    border: string
    link: string
    text: string
  }
}
