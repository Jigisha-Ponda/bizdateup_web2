import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/css/App.css";
import Home from './pages/Home';
import StartAutoScroll from './pages/startAutoScroll';
import Investor from './pages/Investors';
import TabsLayout from './pages/TabsLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/scroll" element={<StartAutoScroll />} /> */}
        <Route path="/tabs" element={<TabsLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;