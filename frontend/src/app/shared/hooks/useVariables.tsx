import { useContext } from "react";
import { VariableContext } from "../providers/VariableProvider";

export const useVariables = () => {
  const context = useContext(VariableContext);

  if (!context) {
    throw new Error("useVariables must be used within a VariableProvider");
  }

  return context;
};
