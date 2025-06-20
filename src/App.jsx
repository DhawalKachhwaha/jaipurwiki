import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
      <BrowserRouter basename="/jaipurwiki">
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
