import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Scene from '@/components/Scene';
import About from '@/components/About';
import PageNotFound from '@/components/404';
import { useGLTF } from '@react-three/drei';

// Preload the model
useGLTF.preload('/boizroom-transformed.glb');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} /> 
        <Route exact path="/home" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/scene" element={<Scene />} />
        <Route
               path="*"
               element={<PageNotFound />}
                />
      </Routes>
    </Router>
  </StrictMode>
);
