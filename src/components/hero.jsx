import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import heroImage from '/src/assets/images/hero-area.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Hero() {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        component="section"
        id="home"
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '500px', md: '700px' },
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          overflow: 'hidden',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        {/* overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(0, 0, 0, 0.75)'
                : 'rgba(0, 0, 0, 0.45)',
            zIndex: 1,
          }}
        />
        {/*motion*/}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontFamily: 'Shadow Into Light',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem ', md: '3rem' },
            }}
          >
            Hi This is
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Open Sans',
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 8,
              mb: 2,
              fontSize: { xs: '3rem', md: '4rem' },
            }}
          >
            KHOLOUD MAHMOUD
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Shadow Into Light',
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Front-end and React js Web developer
          </Typography>
        </motion.div>
        {/* social icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <Box
            sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 3 }}
          >
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/kholoud-mahmoud-537588172"
              target="_blank"
              sx={{
                width: 50,
                borderRadius: '50%',
                backgroundColor: 'white',
                color: 'black',
                transition: 'all 0.3s',
                '&:hover': { backgroundColor: '#0077B5', color: 'white' }, // LinkedIn blue
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://github.com/kholoud-web"
              target="_blank"
              sx={{
                width: 50,
                borderRadius: '50%',
                backgroundColor: 'white',
                color: 'black',
                transition: 'all 0.3s',
                '&:hover': { backgroundColor: '#333', color: 'white' }, // GitHub dark
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </motion.div>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 3,
              padding: '3 5',
              fontSize: '1.3rem',
              backgroundColor: 'primary.main',
              borderRadius: 3,
              '&:hover': { backgroundColor: 'primary.light' },
            }}
          >
            Get Free Quote
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
}
