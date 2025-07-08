import React, {useState} from 'react'
import { Paper, Stack, TextField, InputAdornment, Button, Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  console.log(message);

  const handleSignUp = async () => {
    try {
      console.log("SignUp button clicked");
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        email,
        password
      });
      setMessage(response.data.message);
      if (response) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Error during sign up:", error); 
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred during sign up.');
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={5} sx={{ minHeight: '400px', width: '30%', borderRadius: 4}}>
        <Stack direction='column' m={4} spacing={3}>
          <Typography variant='h4'>SignUp</Typography>
          <Typography variant='subtitle1' color='success' display= { message? 'flex' : 'none'}>{message}</Typography>
          <TextField label='Username' helperText='Enter your username' value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <TextField label='Email' helperText='Enter your valid email' value={email}
            onChange={(e) => setEmail(e.target.value)} InputProps={{endAdornment: <InputAdornment><EmailIcon /></InputAdornment>}} />
          <TextField label='Password' type='password' value={password}
            onChange={(e) => setPassword(e.target.value)}  InputProps={{endAdornment: <InputAdornment><HttpsIcon /></InputAdornment>}} />
          <Button variant='contained' onClick={() => handleSignUp()}>SignUp</Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default SignUp