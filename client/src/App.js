import { useContext } from "react";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import Pages from "pages/Pages";
import Navbar from "components/composite/navbar/Navbar";
import styled, { css } from "styled-components";
import PageBar from "components/composite/pagebar/PageBar";

function App() {
  const { authStore } = useContext(Context);
  return (
    <AppContainer>
      <AppContent>
        <Navbar />
        {authStore.isAuth && <PageBar />}
        <Pages />
      </AppContent>
    </AppContainer>
  );
}

export default observer(App);

const AppContainer = styled("div")(
  ({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.color.second};
  `
);

const AppContent = styled("div")`
  display: flex;
`;
