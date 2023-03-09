import React from "react";

import "./Grid.scss";
import "./GlobalStyle.scss";

interface IProps {
  children: any;
}
const GlobalStyle: React.FC<IProps> = ({ children }) => {
  return children;
};

export default GlobalStyle;
