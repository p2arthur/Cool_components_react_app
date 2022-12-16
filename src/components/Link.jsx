import classNames from "classnames";

//Importing the custom hook to use NavigationContext
import useNavigationContext from "../hooks/use-navigation-context";

function Link({ children, to, className, activeClassName }) {
  //Destructuring the navigate method from the NavigationContext
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const linkHandleClick = (event) => {
    //Checking if the user is pressing the control or command key
    //- if yes let the default behavior
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    //If not prevent default and use our navigate method
    event.preventDefault();

    console.log("User navigated to:", to);
    //Using the navigate Method from our context to change the pathname of our window
    navigate(to);
  };

  return (
    <a className={classes} onClick={linkHandleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
