import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/css/App.css";
import "./assets/css/cardScroll.css";
import Home from './pages/Home';
import StartAutoScroll from './pages/startAutoScroll';
import TabsLayout from './pages/TabsLayout';
import Blogs from './pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scroll" element={<StartAutoScroll />} />
        <Route path="/tabs" element={<TabsLayout />} />
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;