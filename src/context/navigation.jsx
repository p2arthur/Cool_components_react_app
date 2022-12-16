//1) Import useState and createContext
import { useState, createContext, useEffect } from "react";

//2) Define the Navigation context to spread broad data to other components
const NavigationContext = createContext();

//3) Create the NavigationProvider to hold all data to be shared
function NavigationProvider({ children }) {
  //4) Define a piece of state to be shared across components' - Define the default as the current pathname
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //Setting a use effect to handle the state change when the user clicking backward or forward button on pushState
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  //5) Return a NavigationContext.Provider element to share data across all nested components
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

//6) Export NavigationProvider and NavigationContext(To be used on our custom hook use-navigation-context)
export { NavigationProvider };
export default NavigationContext;
