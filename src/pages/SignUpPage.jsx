import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Link} from "react-router-dom";




const SignUpPage = () => {
    const [role, setRole] = React.useState('user');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      companyName: data.get('company-name'),
      phone: data.get('phone'),
      role: role,
    });
    event.currentTarget.reset();
  };



  return (
      <Container component="main" maxWidth="xs" sx={{display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            alignItems: 'center'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid item xs={12} sx={{marginBottom: 2}} container justifyContent="center">
                <FormControl
                 >
                    <RadioGroup
                        row 
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="user"
                        name="radio-buttons-group"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <FormControlLabel value="user" control={<Radio />} label="User" />
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                    </RadioGroup>
                </FormControl>
              </Grid>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                 
                />
              </Grid>
              
              {role === 'admin' && <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="company-name"
                  label="Company Name"
                  name="company-name"
                
                />
              </Grid>}

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Accept Terms and Conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/signin" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default SignUpPage;