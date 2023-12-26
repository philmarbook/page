import React from 'react';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router basename='/philmarbook'>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
