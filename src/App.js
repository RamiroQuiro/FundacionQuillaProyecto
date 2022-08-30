import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Seccion1 from "./views/Secciones/Seccion1";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
