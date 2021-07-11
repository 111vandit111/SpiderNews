import React from "react";

const Rainbow = (WrappedComponent) => {
  const Colors = ["red", "pink", "grey", "yellow", "orange"];
  const randomColor = Colors[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";

  return (props) => {
    return (
      <div className={className}>
        {console.log({ className })};
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
