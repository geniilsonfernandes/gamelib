import { useContext } from "react";
import { UserContext } from "./useProvider";

export const useUser = () => useContext(UserContext);
