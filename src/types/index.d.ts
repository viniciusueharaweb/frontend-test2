import 'styled-components'
import { Colors } from '../theme/colors'


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
  }
}
