import React from "react";

const Breadcrumbs = props => {
  const { width, height, bgColor, content } = props;
  return (
    <div
      style = {{
        width: width || 200,
        height: height || 200,
        backgroundColor: bgColor || "green",
		color: color || "black"
      }}
    >
      HELLO WORLD
    </div>
  );
};

export default Breadcrumbs;