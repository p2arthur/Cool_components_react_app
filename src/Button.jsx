import PropTypes from "prop-types";
import className from "classnames";

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
  //Setting the className using tailwind to each one of the props
  const finalClassName = className({
    "bg-blue-600": primary,
    "bg-black": secondary,
    "bg-green-500": success,
    "bg-red-500": danger,
    "bg-yellow-400": warning,
    "rounded-3xl": rounded,
  });

  //Underlying Element/Wrapped element
  return (
    <button className={`${finalClassName} text-white m-3 p-3 cursor-pointer`}>
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
