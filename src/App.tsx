import { BrowserRouter } from "react-router-dom";
import { Container, Main } from "./styles/style";
import Roots from "./components/Roots";
import MyContext, { Context } from "./context/MyContext";
import { Sidebar, ModalDetails } from "./components";
import { useContext } from "react";

function ContentMain(){
  const { state:{showSidebar} } = useContext(Context);

  return(
    <Main show={showSidebar.toString()} >
      <Sidebar />
        <Container>
          <Roots />
        </Container>
      <ModalDetails />
    </Main>
  );
}

function App() { 
  return (
    <BrowserRouter>
      <MyContext>
        <ContentMain />
      </MyContext>
    </BrowserRouter>
  );
}

export default App;
