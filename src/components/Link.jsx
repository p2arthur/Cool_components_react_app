function Link({ children, to }) {
  const linkHandleClick = (event) => {
    event.preventDefault();

    console.log("User navigated to:", to);
  };

  return (
    <a onClick={linkHandleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
