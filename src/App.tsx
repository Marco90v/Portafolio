import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Main } from "./styles/style";
import MyContext, { Context } from "./context/MyContext";
import { Sidebar, ModalDetails, Roots } from "./components";
import { useFetch } from "./hooks/useFetch";

function ContentMain(){
  const { state:{showSidebar}, dispatch } = useContext(Context);

  const [ projects ] = useFetch("https://raw.githubusercontent.com/Marco90v/JSONs/main/projectsData.json");
  const [ challenges ] = useFetch("https://raw.githubusercontent.com/Marco90v/JSONs/main/challengesData.json");

  useEffect(() => {
    projects && dispatch({ type:"setProjects", data:projects });
    challenges && dispatch({ type:"setChallenges", data:challenges });
  }, [projects, challenges, dispatch]);
  

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
