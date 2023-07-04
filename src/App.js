import { useState } from "react";

import Index from "./pages/";
import PhotographyPage from "./pages/photography/PhotographyPage";
import LiveBackground from "./components/LiveBackground.js";

import "./App.css";

function App() {

  const pages = {
    index: Index,
    photo: PhotographyPage
  }

  const [page, setPage] = useState("index");

  const ActivePage = pages[page];

  return (
    <>
        <header className="site-header">
          <LiveBackground />
          <nav className="nav-bar">
            <div className="nav-header">
              <h1>Alex Sindledecker</h1>
              <h3>Full Stack Developer</h3>
            </div>
          </nav>
        </header>

        <div></div>

        <ActivePage/>
    </>
  );
}

export default App;
