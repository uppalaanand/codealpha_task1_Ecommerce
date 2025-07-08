import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box sx={{ p: 12, mt: 3, bgcolor: '#111827', color: '#fff', display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ width: '60%'}}>
           <Stack direction='row' spacing={5}>
            <Stack direction='column' display='flex' justifyContent='flex-start' alignItems='flex-start' spacing={3}>
              <Typography variant='h6'>Anand Cart</Typography>
              <Typography variant='body2' align='left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus libero voluptatibus ipsam.</Typography>
            </Stack>
            <Stack direction='column' spacing={3} >
                <Typography variant='body1' align='left'>Use This Website to shop.</Typography>
                <Button variant='contained'>Use Me</Button>
            </Stack>
            <Stack direction='column'>
                <Typography variant='body1'>Follow Me</Typography>
                <Stack direction='row' spacing={3}>
                  <IconButton color='inherit'><InstagramIcon  /></IconButton>
                  <IconButton color='inherit'><LinkedInIcon /></IconButton>
                </Stack>
            </Stack>
            <Stack direction='column'>
              <Typography variant='subtitle1'>Contact Us</Typography>
              <Typography variant='body2'>+91 1234567894</Typography> 
            </Stack>
          </Stack>
        </Box>
    </Box>
  )
}

export default Footer