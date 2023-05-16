import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Nav";
import { Container, Main } from "./styles/style";
import Roots from "./components/Roots";
import ModalDetails from "./components/ProjectDetails";
import MyContext from "./context/MyContext";

function App() {

  return (
    <BrowserRouter>
      <MyContext>
        <Main>
          <Sidebar/>
          <Container>
            <Roots/>
          </Container>
          <ModalDetails />
        </Main>
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
