import * as React from "react";
import useLocalStorage from "use-local-storage";
import styled, { ThemeProvider as SCThemeProvider } from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
`;

const StyledButton = styled.button<{ themeColor: string }>`
  background-color: ${(props) => props.themeColor};
  color: ${(props) => props.themeColor};
  border: none;
  flex: 1;
  text-align: center;
  cursor: pointer;
  block-size: 1.5rem;
`;

const themes = {
  green: {
    background: "chartreuse",
    color: "hotpink",
  },
  purple: {
    background: "darkorchid",
    color: "coral",
  },
  blue: {
    background: "deepskyblue",
    color: "papayaWhip",
  },
  light: {
    background: "white",
    color: "black",
  },
  dark: {
    background: "#222",
    color: "white",
  },
};

type Theme = keyof typeof themes;

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<Theme>("ok-daily-theme", "light");

  const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <SCThemeProvider theme={themes[theme as keyof typeof themes]}>
      {children}
    </SCThemeProvider>
  );

  const ThemeButtons = () => (
    <StyledSection>
      {Object.keys(themes).map((theme) => (
        <StyledButton
          key={theme}
          onClick={() => setTheme(theme as Theme)}
          themeColor={themes[theme as Theme].background}
        >
          {theme}
        </StyledButton>
      ))}
    </StyledSection>
  );

  return {
    theme,
    ThemeButtons,
    ThemeProvider,
    setTheme,
  };
};
