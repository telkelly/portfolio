import './App.css';
import React from "react";
import ProjectsPage from "./pages/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
      </Router>
  );
}


export default App;
