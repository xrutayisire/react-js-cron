import React from "react";

const DividerWithText = ({
  children
}) => {
  return React.createElement("div", null, React.createElement("div", null), React.createElement("span", null, children), React.createElement("div", null));
};
export default DividerWithText;