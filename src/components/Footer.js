import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const CreatedBy = styled.span`
  font-family: Poppins ExtraBold;
  color: ${({ theme }) => theme.palette.grey[1]};
  font-size: 20px;
  text-align: center;
`;

const AllRightsReserved = styled.span`
  font-family: Poppins Light;
  color: ${({ theme }) => theme.palette.grey[2]};
  text-align: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <CreatedBy>from mr_jaurewi</CreatedBy>
      <AllRightsReserved>{`${new Date().getFullYear()} © all my rights reserved`}</AllRightsReserved>
    </Wrapper>
  );
};

export default Footer;
