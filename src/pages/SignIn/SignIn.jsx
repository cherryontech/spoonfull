import React, { useState } from 'react';
import { useAuth } from '../../firebase/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const { login, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch {
      setError('Failed to log in');
    }
  }

  async function handleGoogleSignIn() {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch {
      setError('Failed to log in with Google');
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
}
