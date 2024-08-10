import React from 'react';
import Router from './router/Routes';
import { VideoProvider } from './components/Contexts/contextVideo';

function App() {
  return (
    
    <main className='px-8 py-4'>
      <Router />
    </main>
  
  );
}

export default App
