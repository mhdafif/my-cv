import React, { useReducer } from 'react'
import { ITheme } from './ITheme'
import { themeReducer, ThemeAction } from './themeReducer';
import { ThemeContext } from './themeContext';

export const ThemeState: React.FC<any> = props => {
  const initialState: ITheme = { darkTheme: true };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Set theme
  const setTheme = () => {
    dispatch({
      type: ThemeAction.SET_THEME
    });
  }
  
  return (
    <ThemeContext.Provider 
      value={{
        setTheme,
        darkTheme: state.darkTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
