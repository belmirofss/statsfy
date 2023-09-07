import { useContext } from "react";
import AppContext from "../context";

export const useAppContext = () => {
  const contextData = useContext(AppContext);

  return {
    ...contextData,
  };
};
