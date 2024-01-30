// Login.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, CssBaseline } from '@mui/material';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check if the entered credentials are correct (static for simplicity)
    if (username === 'admin' && password === 'admin@1234') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="body2" color="error">
            {error}
          </Typography>
          <Button type="button" fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
