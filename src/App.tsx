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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: ${(props) => props.theme.color};
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  color: ${(props) => props.theme.color};
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
          <Header>
            <Title>OKDAILY</Title>
            <Subtitle>a super simple app for super daily habits</Subtitle>
          </Header>
          <Todos />
        </Container>
      </Background>
    </ThemeProvider>
  );
};
