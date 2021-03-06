import React from "react";
import styled, { withTheme } from "styled-components";

export const Label = styled.label`
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
  &::placeholder {
    color: ${({ theme }) => theme.palette.grey[2]};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin: 15px 0px;
`;

const Input = ({ error, name, label, onChange, value, placeholder }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputText
        name={name}
        type={"text"}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default withTheme(Input);
