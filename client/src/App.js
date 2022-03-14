import { useContext, useEffect } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Navbar from "./components/composite/navbar/Navbar";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  const { authStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.checkAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <AppContent>
            <Navbar />
            <Pages />
          </AppContent>
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default observer(App);

const AppContainer = styled("div")(
  ({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.color.second};
  `
);

const AppContent = styled('div')`
  display: flex;
`
