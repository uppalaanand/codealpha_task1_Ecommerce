import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Stack, Typography, Box, Divider, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

function Cart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { cart } = useCartContext();
  const { handleDelete } = useCartContext();
  const navigate = useNavigate();

  return (
    <Box sx={{ px: 4, mt: 10 }} display='flex' justifyContent='center' alignItems='center'>
      <Box sx={{width: '60%'}}>
        <Stack direction='column' spacing={2}>
          <Stack direction='row' display='flex' justifyContent='space-between'>
            <Typography variant='h6'>Image</Typography>
            <Typography variant='h6'>Name</Typography>
            <Typography variant='h6'>Quantity</Typography>
            <Typography variant='h6'>Price</Typography>
            <Typography variant='h6'>Remove</Typography>
          </Stack>
          <Divider />
            {cart.map((pro) => (
              <>
              <Stack direction='row' display='flex' justifyContent='space-between'>
                <Box sx={{ width: '80px'}} component='img' src={`http://localhost:3000${pro.product.image}`} />
                <Typography variant='h6'>{pro.product.id}</Typography>
                <Typography variant='h6'>{pro.product.stock}</Typography>
                <Typography variant='h6'>{pro.product.new_price}</Typography>
                <Box onClick={() => handleDelete(pro.product.id)} ><DeleteIcon color='warning' /></Box>
              </Stack>
              <Divider />
              </>
            ))}
            <Stack direction='row' display='flex' justifyContent='space-between'>
              <Button variant='contained' onClick={() => navigate('/products')} >Continue Shopping</Button>
              <Typography variant='subtitle1'>1000</Typography>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
              <Typography></Typography>
            <Button variant='contained' onClick={() => navigate('/order')}>Pay</Button>
            </Stack>
            <Divider />
        </Stack>
      </Box>
    </Box>
  )
}

export default Cart