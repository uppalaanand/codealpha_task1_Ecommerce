import React, { use, useState } from 'react';
    import {
  Stepper, Step, StepLabel, Box, Typography, Button, Paper, Stack, useTheme, useMediaQuery
} from '@mui/material';
import ShippingForm from './ShippingPage';
import PaymentForm from './PaymentPage';
import ConfirmationPage from './ConfirmPage';
import { useNavigate } from 'react-router-dom';
import CartPage from './CartPage';

const steps = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

const OrderProcess = () => {
    const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Box id='order' sx={{ p: isMobile ? 2 : 4 }}>
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 4 }}>
        <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
          Order Processing
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4, minHeight: 100 }}>
          <Typography variant="h6" align="center">
            {`Current Step: ${steps[activeStep]}`}
          </Typography>
          <Box sx={{ mt: 2, display: activeStep == 1 ? 'block' : 'none' }}>
            <ShippingForm onNext={handleNext}/>
          </Box>
          <Box sx={{ mt: 2, display: activeStep == 2 ? 'block' : 'none' }}>
            <PaymentForm onPayment={handleNext} />
          </Box>
          <Box sx={{ mt: 2, display: activeStep == 3 ? 'block' : 'none' }}>
            <ConfirmationPage onReturnHome={() => navigate('/')} />
          </Box>
          <Box sx={{ mt: 2, display: activeStep == 0 ? 'block' : 'none' }}>
            <CartPage onNext={handleNext} />
          </Box>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          <Button
            disabled={activeStep === steps.length - 1}
            onClick={handleNext}
            variant="contained"
          >
            Next
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default OrderProcess;
