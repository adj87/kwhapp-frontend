import React, { useContext, useEffect, useState } from "react";
import reactDom from "react-dom";
import styled, { withTheme } from "styled-components";
import { device } from "../constants";
import { MainContext } from "../contexts/MainContext";
import Button from "./Button";

const Background = styled.div`
  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const CenteredDiv = styled.div`
  animation: backInDown;
  animation-duration: 0.5s;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.palette.grey[1] : theme.palette.primary[7]};
  width: 20%;
  height: auto;
  border-radius: 20px;
  padding: 15px 20px;
  box-shadow: 2px 1px 15px 2px rgb(255 255 255), 0px 24px 38px 3px rgb(0 0 0 / 14%),
    0px 9px 46px 8px rgb(0 0 0 / 12%);

  width: 100%;
  margin: 0.5rem;

  @media ${device.deviceMd} {
    width: ${({ size }) => " 100%"};
  }
  @media ${device.deviceLg} {
    width: ${({ size }) => (size === "md" ? "350px" : "600px")};
  }
`;

const Header = styled.h1`
  text-align: center;
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.palette.grey[2] : theme.palette.primary.main};
  margin: 0px 0px 20px 0px;
  font-family: Poppins Bold;
  color: ${({ theme, darkMode }) => (darkMode ? theme.palette.grey[2] : theme.palette.grey[1])};
`;

const ButtonsRow = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
`;

const Modal = ({ children, header, size = "md", onCancel, onAccept }) => {
  const { darkMode } = useContext(MainContext);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    // create element div wich will be placed out of the root element in html. Add classname and onclick event
    const modal = document.createElement("div");
    modal.className = "portal-modal";
    // append to body and set it
    document.body.appendChild(modal);
    setModal(modal);
    return () => {
      document.body.removeChild(modal);
    };
  }, []);

  return (
    modal &&
    reactDom.createPortal(
      <Background>
        <CenteredDiv size={size} darkMode={darkMode} size={size ?? "md"}>
          <Header darkMode={darkMode}>{header}</Header>
          {children}
          <ButtonsRow>
            <Button onClick={onCancel} inverse>
              Cancel
            </Button>
            <Button onClick={onAccept}>Save Changes</Button>
          </ButtonsRow>
        </CenteredDiv>
      </Background>,
      modal,
    )
  );
};
export default withTheme(Modal);
