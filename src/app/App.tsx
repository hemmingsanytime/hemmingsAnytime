import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
