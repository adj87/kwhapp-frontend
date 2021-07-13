import styled from "styled-components";

export default styled.button`
  width: 100%;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  font-family: Poppins Black;
  color: ${({ theme, color, inverse }) => {
    return inverse ? theme.palette.primary[6] : theme.palette.bodyColor;
  }};
  border: ${({ theme, inverse }) => (inverse ? `1px solid ${theme.palette.primary[5]}` : "none")};
  padding: 5px 0px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({ theme, color, inverse }) => {
    switch (color) {
      default:
        return inverse ? theme.palette.bodyColor : theme.palette.primary[5];
    }
  }};
  &:hover {
    background-color: ${({ theme, color, inverse }) => {
      switch (color) {
        case "primary":
          return inverse ? theme.palette.primary.contrastText : theme.palette.primary[3];

        case "secondary":
          return theme.palette.secondary.main;

        default:
          return inverse ? theme.palette.primary.contrastText : theme.palette.primary[7];
      }
    }};
  }
`;
