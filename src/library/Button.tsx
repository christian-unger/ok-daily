import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
`;
