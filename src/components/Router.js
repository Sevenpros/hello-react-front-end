import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Greeting from './Greeting';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  );
}

export default Router;
