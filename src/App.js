import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Header from "./views/Header/Header";
import Seccion1 from "./views/Secciones/Seccion1";


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="/home" element={<Header/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
