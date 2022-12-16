//Importing the custom hook to use NavigationContext
import useNavigationContext from "../hooks/use-navigation-context";

function Link({ children, to }) {
  //Destructuring the navigate method from the NavigationContext
  const { navigate } = useNavigationContext();

  const linkHandleClick = (event) => {
    event.preventDefault();

    console.log("User navigated to:", to);
    //Using the navigate Method from our context to change the pathname of our window
    navigate(to);
  };

  return (
    <a onClick={linkHandleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
