import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreateLocation from './pages/CreateLocation';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' element={<Home />} />
      <Route path='/create-location' element={<CreateLocation />} />
    </BrowserRouter>
  );
}

export default Routes;
