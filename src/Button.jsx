//Wrapper Element
function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  //Underlying Element/Wrapped element
  return <button>{children}</button>;
}

export default Button;
