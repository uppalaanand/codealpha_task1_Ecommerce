import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const PaymentForm = ({ onPayment }) => {
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Payment submitted:', paymentData);
    onPayment(); // proceed to confirmation step
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper sx={{ p: isMobile ? 2 : 4, mt: 4 }} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Payment Details
      </Typography>

      <Box component="form" noValidate autoComplete="off" mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="cardName"
              label="Name on Card"
              value={paymentData.cardName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="cardNumber"
              label="Card Number"
              value={paymentData.cardNumber}
              onChange={handleChange}
              inputProps={{ maxLength: 16 }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="expiry"
              label="Expiry (MM/YY)"
              value={paymentData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="cvv"
              label="CVV"
              value={paymentData.cvv}
              onChange={handleChange}
              type="password"
              inputProps={{ maxLength: 4 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h6">Payment Summary</Typography>
          <Typography>Subtotal: ₹1,200</Typography>
          <Typography>Shipping: ₹50</Typography>
          <Typography fontWeight="bold">Total: ₹1,250</Typography>
        </Box>

        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Pay Now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PaymentForm;
