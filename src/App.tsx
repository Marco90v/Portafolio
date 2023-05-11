import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Nav";
import { Main } from "./styles/style";

function App() {

  return (
    <BrowserRouter>
      <Main>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />,
          <Route path="/cv" element={<h1>CV</h1>} />,
          <Route path="/project" element={<h1>Project</h1>} />,
          <Route path="/challenges" element={<h1>Challenges</h1>} />,
          <Route path="/contacts" element={<h1>Contacts</h1>} />,
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
