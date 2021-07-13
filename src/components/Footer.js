import React, { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../contexts/MainContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CreatedBy = styled.span`
  font-family: Poppins ExtraBold;
  font-size: 20px;
  text-align: center;
  color: ${({ theme, darkMode }) => (darkMode ? "white" : theme.palette.grey[1])};
`;

const AllRightsReserved = styled.span`
  font-family: Poppins Light;
  color: ${({ theme }) => theme.palette.grey[2]};
  text-align: center;
`;

const Footer = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <Wrapper darkMode={darkMode}>
      <CreatedBy darkMode={darkMode}>from mr_jaurewi</CreatedBy>
      <AllRightsReserved>{`${new Date().getFullYear()} © all my rights reserved`}</AllRightsReserved>
    </Wrapper>
  );
};

export default Footer;
