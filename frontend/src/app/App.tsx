import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { router } from './routes';
import Splash from './components/Splash.tsx';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <Splash onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      {!showSplash && <RouterProvider router={router} />}
    </>
  );
}