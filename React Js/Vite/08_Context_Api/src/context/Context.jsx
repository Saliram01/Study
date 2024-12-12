import { createContext } from 'react'

export const ThemeContext = createContext();

export function Context({children}) {
    const name = 'Context Application Programming Interface';
    const note = 'Context API is a way ot share value or state accross your entire application without having props.';
  return (
    <ThemeContext.Provider value={{name,note}}>
      {children}
    </ThemeContext.Provider>
  )
}