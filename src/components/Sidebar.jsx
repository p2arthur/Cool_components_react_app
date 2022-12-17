import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedItems = links.map((link) => (
    <Link
      activeClassName="border-l-2 border-blue-500 font-bold pl-2"
      className="mb-3"
      key={link.label}
      to={link.path}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="flex flex-col items-start sticky top-0 overflow-y-scroll">
      {renderedItems}
    </div>
  );
}

export default Sidebar;
