import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import CanvasLoader from '@/components/CanvasLoader';
import ErrorBoundary from './components/ErrorBoundary';

const Scene = lazy(() => import('@/components/Scene'));

export default function App() {
  return (
    <ErrorBoundary>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <Scene />
        </div>
    </ErrorBoundary>
  );
}
