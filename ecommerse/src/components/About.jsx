import { Button, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import image from './homepic.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <Box sx={{ px: 4, mt: 10,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '60%' }}>
      <Stack direction='row' spacing={4}>
        <Stack direction='column' spacing={2} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
          <Typography variant='subtitle2' color='gray'>WELCOME TO</Typography>
          <Typography variant='h3'>Anand Ecommerse</Typography>
          <Typography variant='body2' color='gray' align='left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti libero, ea ab officia, itaque veritatis obcaecati illum quibusdam ratione laudantium magnam? Corporis voluptate repellat vel ab repellendus expedita eos id?</Typography>
          <Button variant='contained' onClick={() => navigate('/products')}>Shop Now</Button>
        </Stack>
        <Stack>
          <Box component='img' src={image} width='400px' boxShadow={10}/>
        </Stack>
      </Stack>
      </Box>
    </Box>
  )
}

export default About