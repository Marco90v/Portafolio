import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Nav";
import { Container, Main } from "./styles/style";
import Roots from "./components/Roots";

function App() {


  return (
    <BrowserRouter>
      <Main>
        <Sidebar/>
        <Container>
          <Roots/>
        </Container>
      </Main>
    </BrowserRouter>
  );
}

export default App;
