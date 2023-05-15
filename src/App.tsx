import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Nav";
import { Container, Main } from "./styles/style";
import Roots from "./components/Roots";
import ProjectDetails from "./components/ProjectDetails";
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
          <ProjectDetails />
        </Main>
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
