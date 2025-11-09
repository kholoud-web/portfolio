import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



export default function Contact() {
  const theme = useTheme();
  // snack bar
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //form validate
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('submitted', data);
    reset();
  };

  // Subtle background circles using theme colors
  const circleColor =
    theme.palette.mode === 'light'
      ? 'rgba(25, 118, 210, 0.1)'
      : 'rgba(255, 255, 255, 0.08)';

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        overflow: 'hidden',
        transition: 'background-color 0.3s ease-in-out',
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Floating circles */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: circleColor,
        }}
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: circleColor,
        }}
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Contact form */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(255,255,255,0.7)'
                : 'rgba(30,30,30,0.6)',
            backdropFilter: 'blur(10px)',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 4px 20px rgba(0,0,0,0.1)'
                : '0 4px 25px rgba(0,0,0,0.5)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: 'center',
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            Contact Me
          </Typography>

          <TextField
            placeholder="Name"
            label="Your Name"
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                backgroundColor:
                  theme.palette.mode === 'light' ? '#fff' : '#1f1f1f',
              },
            }}
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          ></TextField>

          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                backgroundColor:
                  theme.palette.mode === 'light' ? '#fff' : '#1f1f1f',
              },
            }}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            sx={{
              mb: 3,
              '& .MuiInputBase-root': {
                backgroundColor:
                  theme.palette.mode === 'light' ? '#fff' : '#1f1f1f',
              },
            }}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters',
              },
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <Button
            onClick={handleClick}
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.2,
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            Send Message
          </Button>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Message sent successfuly!
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
}
