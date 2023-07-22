import { SpotifyTimeRanges } from "./types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      About: undefined;
      Account: undefined;
      Share: undefined
    }
  }

  declare module "*.png";
  declare module "*.ttf";
}
