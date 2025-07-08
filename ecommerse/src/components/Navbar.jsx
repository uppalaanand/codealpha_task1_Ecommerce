import React from 'react'
import { Box, AppBar, Toolbar, Typography, Stack, Button, IconButton, Drawer, ListItem, ListItemText, List } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [ open, setOpen ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setIsLoggedIn(!!storedUser);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: 0 }}>
    <AppBar position='static' elevation={'none'} sx={{ backgroundColor: '#385c57'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
            <Typography variant='h5' component='h1'>E-Commerse</Typography>
            <Stack direction='row' spacing={4} sx={{ display: { xs: 'none', sm: 'flex' },}}>
                <Button variant='h6' sx={{ '&:hover' : {
                  color: '#f9940f',
                },}} onClick={() => navigate('/')}>Home</Button>
                <Button variant='h6' sx={{ '&:hover' : {
                  color: '#f9940f',
                },}} onClick={() => navigate('/products')}>Products</Button>
                <Button variant='h6' sx={{ '&:hover' : {
                  color: '#f9940f',
                },}}  onClick={() => navigate('/cart')}>Cart</Button>
                <Button variant='h6' sx={{ '&:hover' : {
                  color: '#f9940f',
                },}}  onClick={() => navigate('/about')}>About</Button>
                {isLoggedIn ? 
                   <Button variant='contained' size='small' onClick={() => handleLogout()} color='info'>LogOut</Button>
                  :
                  <>
                    <Button variant='contained' size='small' onClick={() => navigate('/signup')} color='info'>SignUp</Button>
                    <Button variant='contained' size='small' color='info' onClick={() => navigate('/login')}>LogIn</Button>
                  </>
                }
            </Stack>
            <IconButton color='inherit' onClick={handleOpen} sx={{ display: { xs: 'flex', sm: 'none' },}}>
              <MenuIcon />
            </IconButton>
            <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
              <Box sx={{ width: 250, position: 'relative', p: 2 }}>
                <IconButton onClick={() => setOpen(false)} sx={{ mb: 1 }}>
                  <ChevronLeftIcon />
                </IconButton>
                <List>
                  <ListItem button onClick={() => { navigate('/'); setOpen(false); }}
                    sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <ListItemText primary='Home' />
                  </ListItem>
                  <ListItem button onClick={() => { navigate('/products'); setOpen(false); }}
                    sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <ListItemText primary='Products' />
                  </ListItem>
                  <ListItem button onClick={() => { navigate('/cart'); setOpen(false); }}
                    sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <ListItemText primary='Cart' />
                  </ListItem>
                  <ListItem button onClick={() => { navigate('/about'); setOpen(false); }}
                    sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <ListItemText primary='About' />
                  </ListItem>
                  {isLoggedIn ? 
                    <ListItem button onClick={() => { handleLogout(); setOpen(false); }}
                      sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                      <ListItemText primary='LogOut' />
                    </ListItem>
                    :
                    <>
                      <ListItem button onClick={() => { navigate('/signup'); setOpen(false); }}
                        sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                        <ListItemText primary='SignUp' />
                      </ListItem>
                      <ListItem button onClick={() => { navigate('/login'); setOpen(false); }}
                        sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                        <ListItemText primary='LogIn' />
                      </ListItem>
                    </>
                  }
                </List>
              </Box>
            </Drawer>
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar