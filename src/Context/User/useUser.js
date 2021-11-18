import { useContext } from "react";
import { UserContext } from "./userProvider";

export const useUser = () => useContext(UserContext);
