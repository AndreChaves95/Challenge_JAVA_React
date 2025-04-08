import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../services/api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (username != 'admin' || password != 'admin123') {
      setError('Invalid credentials!');
      return;
    } else {
      setAuth(username, password);
      navigate('/products');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login into Products Catalog Project</h2>
      <form onSubmit={handleUserLogin}>
        {error && <div className="alert alert-danger">{error}</div>}
        <input type="text" placeholder="Insert Username" className="form-control my-2"
               value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Insert Password" className="form-control my-2"
               value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}