import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import { MainContext } from "../contexts/MainContext";

const BodyStyles = styled.div`
  width: 800px;
  margin: auto;
`;

const Body = ({ children }) => {
  const { darkMode } = useContext(MainContext);
  return <BodyStyles darkMode={darkMode}>{children}</BodyStyles>;
};

export default withTheme(Body);
