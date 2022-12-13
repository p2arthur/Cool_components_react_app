import className from "classnames";

//Wrapper Element
function Button({
  children,
  inactive,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  //Making the button component by taking every prop like onClick, onMouseEnter... passed to the component directly to the plain button element as event listeners
  ...rest
}) {
  //Setting the className conditionally using tailwind to each one of the props
  const theClass = className(
    rest.className,
    "flex items-center justify-center m-3 p-3 cursor-pointer h-9",
    {
      "bg-white border-2 border-gray-900": inactive,
      "border-blue-500 bg-blue-500 border-2  text-white": primary,
      "bg-gray-900 border-2 border-gray-900 text-white": secondary,
      "bg-green-500 border-2 border-green-500 text-white": success,
      "bg-red-500 border-2 border-red-500 text-white": danger,
      "bg-yellow-300 border-2 border-yellow-300": warning,
      "rounded-full": rounded,
      "button-outlined": outline,
      "text-gray-900 ": outline && secondary,
      "text-blue-500 ": outline && primary,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
      "text-yellow-300": outline && warning,
    }
  );

  //Underlying Element/Wrapped element
  return (
    <button {...rest} className={`${theClass}`}>
      {children}
    </button>
  );
}

//Checking if there are conflicting variation props using prop-types library
Button.propTypes = {
  checkVariatioName: ({ primary, secondary, success, warning, danger }) => {
    const count =
      +!!primary + +!!secondary + +!!success + +!!warning + +!!danger;

    if (count > 1) {
      return new Error(
        "Only one Variation: primary, secondary, success, warning, danger can be true "
      );
    }
  },
};

export default Button;
