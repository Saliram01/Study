import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import React, { Suspense } from 'react';

function App() {
  
  return (
    <React.Fragment>
      <Header/>
      <Suspense>
        <Outlet/>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
