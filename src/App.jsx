import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  //Defining some dumb data to put inside my accordion
  const items = [
    {
      label: "Will I learn Javascript?",
      content:
        "Yeah you will learn javascript! Yeah you will learn javascript! Yeah you will learn javascript! Yeah you will learn javascript!Yeah you will learn javascript!",
      id: 1,
    },
    {
      label: "Will I learn HTML?",
      content:
        "Yeah you will learn HTML! Yeah you will learn HTML! Yeah you will learn HTML! Yeah you will learn HTML!Yeah you will learn HTML!Yeah you will learn HTML!",
      id: 2,
    },
    {
      label: "Will I learn CSS?",
      content:
        "Yeah you learn CSS! Yeah you learn CSS! Yeah you learn CSS! Yeah you learn CSS! Yeah you learn CSS! Yeah you learn CSS! Yeah you learn CSS!",
      id: 3,
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
