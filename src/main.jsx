import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from '@/components/About';
import { useGLTF } from '@react-three/drei';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import InteractiveStars from './components/Cursor';
import "./App.css";

// Preload the model
useGLTF.preload('/boizroom-transformed.glb');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractiveStars />
    <App />
  </StrictMode>
);
