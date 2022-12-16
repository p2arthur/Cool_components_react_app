//9) Craeate a custom hook to facilitate the utilization of the context inside of our components

import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigationContext() {
  return useContext(NavigationContext);
}

export default useNavigationContext;
