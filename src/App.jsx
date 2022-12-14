import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  //Defining some dumb data to put inside my accordion
  const items = [
    {
      label: "Will I learn Javascript?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum minima eveniet aliquam ipsa a magnam ullam laudantium? Omnis optio dolorum corporis aliquam soluta ipsam perferendis doloribus nam blanditiis atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum minima eveniet aliquam ipsa a magnam ullam laudantium? Omnis optio dolorum corporis aliquam soluta ipsam perferendis doloribus nam blanditiis atque.",
      id: 1,
    },
    {
      label: "Will I learn HTML?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum minima eveniet aliquam ipsa a magnam ullam laudantium? Omnis optio dolorum corporis aliquam soluta ipsam perferendis doloribus nam blanditiis atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum minima eveniet aliquam ipsa a magnam ullam laudantium? Omnis optio dolorum corporis aliquam soluta ipsam perferendis doloribus nam blanditiis atque.",
      id: 2,
    },
    {
      label: "Will I learn CSS?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum minima eveniet aliquam ipsa a magnam ullam laudantium? Omnis optio dolorum corporis aliquam soluta ipsam perferendis doloribus nam blanditiis atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum minima eveniet aliquam ipsa a magnam ullam laudantium? Omnis optio dolorum corporis aliquam soluta ipsam perferendis doloribus nam blanditiis atque.",
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
