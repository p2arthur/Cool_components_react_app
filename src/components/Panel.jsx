import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "p-3 shadow bg-white rounded border w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {" "}
      {children}
    </div>
  );
}

export default Panel;
