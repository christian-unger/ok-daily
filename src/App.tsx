import * as React from "react";
import { Todos } from "./todos";
import { useWelcomeModal, useTheme } from "./components";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";

const Background = styled.main`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.theme.color};
  padding: 1rem;
`;

export const App = () => {
  const { Modal, ModalButton } = useWelcomeModal();
  const { ThemeProvider, ThemeButtons } = useTheme();
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Modal />
      <ModalButton />
      <ThemeButtons />
      <Background>
        <Container>
          <Title>OKDAILY</Title>
          <Todos />
        </Container>
      </Background>
    </ThemeProvider>
  );
};
