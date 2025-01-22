import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Temporary page components until we create the real ones
const Home = () => <div>Home Page</div>;
const Roadmap = () => <div>Roadmap Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
