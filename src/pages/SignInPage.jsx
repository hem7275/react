import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '../features/auth/authSlice';  // Assuming this is the path to your authSlice
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import axios from 'axios';



const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const handleSignIn = async (email, password) => {
    dispatch(signInStart());
    try {
      const response = await axios.post('/api/auth/signin', { email, password });
       console.log(response);
      dispatch(signInSuccess({
        jwtToken: response.data.jwtToken,
        userRole: response.data.user.role
      }));
     
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error.response.data));
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email is not valid.";
    tempErrors.password = password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
    handleSignIn(email, password);
       
      // dispatch(signIn({ email, password }))
      //   .unwrap()
      //   .then((data) => {
      //     navigate(data.user.role === 'admin' ? '/dashboard' : '/home');
      //   })
      //   .catch(error => {
      //     console.error('Failed to sign in:', error);
      //     setErrors(prev => ({ ...prev, form: 'Invalid email or password.' }));
      //   });
    }
  };

  return (
   
      <Container component="main" maxWidth="xs" sx={{display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            alignItems: 'center'}}>
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign In</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            {errors.form && <Alert severity="error">{errors.form}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container flex justifyContent="center">
              
              <Grid item>
                <Link to="/signup" variant="body2">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
   
  );
};

export default SignInPage;
