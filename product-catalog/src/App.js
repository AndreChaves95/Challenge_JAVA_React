import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
