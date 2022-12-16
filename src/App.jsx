import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Link from "./components/Link";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleClick = () => {
      console.log("I'm at:", window.location.pathname);
    };

    window.addEventListener("popstate", handleClick);
  }, []);

  return (
    <div>
      <DropdownPage />
      <Link to="home">Go to Home Page</Link>
    </div>
  );
}

export default App;
