import { createContext, ReactNode, useContext, useState } from 'react'
import { DefaultTheme, ThemeProvider as StyledProvider } from 'styled-components'
import theme from '../theme'

type ThemeProps = {
  children: ReactNode
}

type ThemeContextData = {
  theme: DefaultTheme
  themeLoading: boolean
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [contextTheme, setContextTheme] = useState<DefaultTheme>(theme)
  const [themeLoading, setThemeLoading] = useState(true)

  return (
    <ThemeContext.Provider
      value={{
        theme: contextTheme,
        themeLoading,
      }}
    >
      <StyledProvider theme={contextTheme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
