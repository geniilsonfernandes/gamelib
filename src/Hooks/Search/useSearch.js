import { useContext } from "react";
import { UserContext } from "./SearchProvider";

export const useSearch = () => useContext(UserContext);
