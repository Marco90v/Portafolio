import { BrowserRouter } from "react-router-dom";
import { Container, Main } from "./styles/style";
import Roots from "./components/Roots";
import MyContext from "./context/MyContext";
import { Sidebar, ModalDetails } from "./components";

function App() {

  return (
    <BrowserRouter>
      <MyContext>
        <Main>
          <Sidebar />
          <Container>
            <Roots />
          </Container>
          <ModalDetails />
        </Main>
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
