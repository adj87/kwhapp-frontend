import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import DarkModeSwitch from "../components/Switch";

const Kwh = styled.span`
  font-family: Poppins Black;
  font-size: 55px;
  color: ${({ theme }) => theme.palette.primary[4]};
  transform: rotate(353deg);
`;
const App = styled.span`
  font-family: Poppins Black;
  font-size: 55px;
  color: ${({ theme }) => theme.palette.primary[7]};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.grey[1]};
`;
const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: Poppins Bold;
  margin-top: 10px;
`;

const SubTitle1 = styled.span`
  color: white;
  font-size: 16px;
`;
const SubTitle2 = styled.span`
  color: ${({ theme }) => theme.palette.primary[7]};
  font-size: 16px;
  transform: translateY(-6px);
`;

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Wrapper>
      <WrapperTitle>
        <Kwh>kWh</Kwh>
        <App>App</App>
      </WrapperTitle>
      <WrapperSubTitle>
        <SubTitle1>Control your consumption</SubTitle1>
        <SubTitle2>and save the planet</SubTitle2>
      </WrapperSubTitle>
      <DarkModeSwitch onClick={setDarkMode} on={darkMode} />
    </Wrapper>
  );
};

export default withTheme(Header);
