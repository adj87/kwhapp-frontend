import React from "react";
import styled, { withTheme } from "styled-components";

const Label = styled.label`
  color: ${({ theme }) => theme.palette.primary[5]};
  font-family: Poppins Bold;
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
`;

const InputText = styled.input`
  color: ${({ theme }) => theme.palette.primary[2]};
  border-radius: 5px;
  // background-color: ${({ theme }) => theme.palette.grey[100]};
  //  border: 0.6px solid ${({ theme }) => theme.palette.grey[400]};
  padding: 7px;
  transition: 1s;
  font-size: 14px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  &:focus {
    outline-color: ${({ theme }) => theme.palette.primary[3]};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin: 15px 0px;
`;

const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error};
`;

const Input = ({ error, name, label, onChange, value }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputText
        name={name}
        type={"text"}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        value={value}
      />
    </InputWrapper>
  );
};

export default withTheme(Input);
