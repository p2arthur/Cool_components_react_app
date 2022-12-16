import useNavigationContext from "../hooks/use-navigation-context";

//Setting up a route to display a component depending on the pathname
function Route({ path, children }) {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
