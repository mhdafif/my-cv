import { createContext } from 'react';
import { ITheme } from './ITheme';

export interface IThemeContext extends ITheme {
  setTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);
