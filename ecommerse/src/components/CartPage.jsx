import React, { use, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  IconButton,
  Divider,
  TextField,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '../context/cart_context';


const CartPage = ({ onNext }) => {
    let { cart, setCart } = useCartContext();
  console.log(setCart)

  const handleQuantityChange = (id, qty) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
    );
    console.log("Updated Cart:", updated);
  };

  const handleRemove = (id) => {
    // setCart(cart.filter(item => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper sx={{ p: isMobile ? 2 : 4, mt: 4 }} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box key={item.id}>
              <Grid container spacing={20} alignItems="center" ml={6}>
                <Grid item xs={4} sm={2}>
                  <img src={`http://localhost:3000${item.product.image}`} alt={item.product.name} width='100px' />
                </Grid>
                <Grid item xs={8} sm={4}>
                  <Typography variant="subtitle1">{item.product.name}</Typography>
                  <Typography variant="body2">Price: ₹{item.product.new_price}</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <TextField
                    type="number"
                    size="small"
                    value={item.product.stock}
                    onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <Typography>₹{ setCart * item.quantity}</Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <IconButton color="error" onClick={() => handleRemove(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}

          <Box textAlign="right" mt={3}>
            <Typography variant="h6">Total: ₹{totalAmount}</Typography>
            <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
              <Button variant="outlined">Continue Shopping</Button>
              <Button variant="contained" onClick={onNext}>
                Proceed to Shipping
              </Button>
            </Stack>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default CartPage;
