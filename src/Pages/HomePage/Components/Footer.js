import React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{

        backgroundColor: '#13131e', // Adjust background color to match the design
        color: '#c7c7d4', // Light gray text color
        padding: '40px 20px', // Padding for top and bottom spacing
        textAlign: 'left', // Align text to the left
        position: 'relative',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50.5%)',
      }}
    >
        <Box sx = {{paddingLeft: '5%'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>
        Связаться с нами
      </Typography>

      <Divider sx={{ borderColor: '#2e2e3e', width: '50px', marginBottom: '20px' }} />

      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Почта: <Link href="mailto:office@alexatech.by" color="#569cd6" underline="none">yoursEmail@gmail.com</Link>
      </Typography>
      
      <Typography variant="body1" sx={{ marginBottom: '32px' }}>
        Телефон: <Link href="tel:+375292170922" color="#569cd6" underline="none">+375 (20) 197-29-21</Link>
      </Typography>
        </Box>

      <Divider sx={{ borderColor: '#2e2e3e', marginBottom: '20px' }} />

      <Box sx ={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'}}>
        <Typography variant="body2" sx={{ color: '#888', fontSize: '0.875rem' }}>
        © 2019-2023, ООО "Алекса Технолоджис" <br /> Все права защищены
      </Typography>
        </Box>

      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#3a3a4f',
          color: '#fff',
          '&:hover': { backgroundColor: '#50506d' },
          borderRadius: '50%',
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
