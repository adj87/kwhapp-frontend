import React from "react";
import styled from "styled-components";

const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ on, theme }) => (on ? theme.palette.blue : "#ccc")};

  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    border-radius: 34px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    transform: ${({ on }) => (on ? "translateX(26px)" : "translateX(0px)")};
  }
`;

const Switch = ({ onClick, on }) => {
  return (
    <SwitchStyled onClick={() => onClick(!on)}>
      <Slider on={on} />
    </SwitchStyled>
  );
};

export default Switch;
