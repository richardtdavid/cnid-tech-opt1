import { createContext } from "react";

export type AppStateOptions = {
  sortBy: string;
  region: string;
};

export type AppState = {
  appState: AppStateOptions;
  setAppState: React.Dispatch<React.SetStateAction<AppStateOptions>>;
};

export const AppContext = createContext<AppState>({
  appState: {
    sortBy: "publishedAt",
    region: "",
  },
  setAppState: () => {},
});
