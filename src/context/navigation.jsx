//1) Import useState and createContext
import { useState, createContext } from "react";

//2) Define the Navigation context to spread broad data to other components
const NavigationContext = createContext();

//3) Create the NavigationProvider to hold all data to be shared
function NavigationProvider({ children }) {
  //4) Define a piece of state to be shared across components
  const [currentPath, setCurrentPath] = useState("");

  //5) Return a NavigationContext.Provider element to share data across all nested components
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

//6) Export NavigationProvider and NavigationContext(To be used on our custom hook use-navigation-context)
export { NavigationProvider };
export default NavigationContext;
