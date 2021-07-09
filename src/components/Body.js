import React from "react";
import styled from "styled-components";

const BodyStyles = styled.div`
  width: 800px;
  margin: auto;
`;

const Body = ({ children }) => {
  return <BodyStyles>{children}</BodyStyles>;
};

export default Body;
