import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';
import Profile from './pages/Profile';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
