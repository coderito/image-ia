import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import "./index.css";
import { Layout } from "./layout/Layout";
import { Aplicacion } from "./pages/Aplicacion";
import { Contacto } from "./pages/Contacto";
import { Funcionamiento } from "./pages/Funcionamiento";
import { Inicio } from "./pages/Inicio";
import { NoPage } from "./pages/NoPage";

function App() {
  return (
    <>
      <Navbar title="PicturAI" />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="funcionamiento" element={<Funcionamiento />} />
          <Route path="aplicacion" element={<Aplicacion />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
