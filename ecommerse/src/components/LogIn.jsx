import React,{useState} from 'react'
import { Paper, Stack, TextField, InputAdornment, Button, Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleLoginUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });
      setMessage(response.data.message);
      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred during login.');
      }
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={5} sx={{ minHeight: '400px', width: '30%', borderRadius: 4}}>
        <Stack direction='column' m={4} spacing={5}>
          <Typography variant='h4'>LogIn</Typography>
           <Typography variant='subtitle1' color='success' display= { message? 'flex' : 'none'}>{message}</Typography>
          <TextField label='Email' helperText='Enter your valid email' value={email} onChange={(e) => setEmail(e.target.value)} InputProps={{endAdornment: <InputAdornment><EmailIcon /></InputAdornment>}} />
          <TextField label='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} helperText='Do nit share your password with anyone.' InputProps={{endAdornment: <InputAdornment><HttpsIcon /></InputAdornment>}} />
          <Button variant='contained' onClick={(e) => handleLoginUser()}>Login</Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default LogIn