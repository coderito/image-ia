import { Typewriter } from "react-simple-typewriter";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import "./index.css";
import { Inicio } from "./pages/Inicio";

function App() {

  return (
    <>
      <Navbar title="PicturAI" />
      <Sidebar />
      <div class="p-4 py-20 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="gap-4 mb-4">
    `        <Inicio />`
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
