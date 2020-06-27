import { ITheme } from "./ITheme";

export enum ThemeAction {
  SET_THEME = "@@SET_THEME",
}

export const themeReducer = (state: any, action: any): ITheme => {
  switch (action.type) {

    case ThemeAction.SET_THEME:
      return { ...state, darkTheme: !state.darkTheme };

    default:
      return state;
  }
};
