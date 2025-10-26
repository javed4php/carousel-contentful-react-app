import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageCarousel from "./components/PageCarousel";
import Page from "./pages/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageCarousel />} />
        <Route path="/:slug" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
