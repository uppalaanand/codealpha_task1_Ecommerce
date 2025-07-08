import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const ShippingForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    shippingMethod: 'standard',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // You can validate here if needed
    handleChange()
    console.log('Shipping Data:', formData);
    onNext(); // move to next step
  };

  return (
    <Paper sx={{ p: isMobile ? 2 : 4, mt: 4 }} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Shipping Details
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="phone" label="Phone Number" value={formData.phone} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth name="address1" label="Address Line 1" value={formData.address1} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth name="address2" label="Address Line 2" value={formData.address2} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="city" label="City" value={formData.city} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="state" label="State" value={formData.state} onChange={handleChange} />
          </Grid>
          <Grid item xs={6} sm={2}>
            <TextField fullWidth name="zip" label="ZIP Code" value={formData.zip} onChange={handleChange} />
          </Grid>
          <Grid item xs={6} sm={2}>
            <TextField fullWidth name="country" label="Country" value={formData.country} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: 'block', justifyContent: 'center', alignItems: 'center',  mt: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Shipping Method
            </Typography>
            <RadioGroup column name="shippingMethod" value={formData.shippingMethod} onChange={handleChange}>
              <FormControlLabel value="standard" control={<Radio />} label="Standard (₹50, 3–5 days)" />
              <FormControlLabel value="express" control={<Radio />} label="Express (₹150, 1–2 days)" />
              <FormControlLabel value="free" control={<Radio />} label="Free (5–7 days)" />
            </RadioGroup>
          </Grid>

        <Box mt={4} textAlign="center">
          <Button variant="contained" onClick={() => onNext()}>
            Continue to Payment
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ShippingForm;
