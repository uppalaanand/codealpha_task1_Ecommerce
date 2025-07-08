import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ConfirmationPage = ({ onReturnHome }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper sx={{ p: isMobile ? 2 : 4, mt: 4 }} elevation={3}>
      <Box textAlign="center">
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'green' }} />
        <Typography variant="h5" mt={2}>
          Order Confirmed!
        </Typography>
        <Typography variant="subtitle1" mt={1} color="text.secondary">
          Thank you for your purchase. Your order has been placed successfully.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Typography>Order ID: #ORD123456789</Typography>
        <Typography>Items: 3</Typography>
        <Typography>Total Amount Paid: ₹1,250</Typography>
        <Typography>Estimated Delivery: June 28, 2025</Typography>
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" onClick={onReturnHome}>
          Go to Home
        </Button>
        <Button variant="outlined" color="primary">
          View Orders
        </Button>
      </Stack>
    </Paper>
  );
};

export default ConfirmationPage;
