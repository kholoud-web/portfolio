import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import about from '/src/assets/images/about-1.jpg';
import Button from '@mui/material/Button';git status

import { motion } from 'framer-motion';
//react hooks
import { useTheme } from '@mui/material/styles';

export default function Info() {
  const theme = useTheme();

  const handleViewResume =()=>{
     window.open("/Kholoud_Mahmoud_React_Developer_CV.pdf", "_blank");

  }

  return (
    <Box
      component="section"
      id="about"
      sx={{ py: 6, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 6 } }}>
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              component="img"
              src={about}
              alt="Profile"
              loading="lazy" 
              sx={{
                marginTop:"50px",
                width: '100%',
                borderRadius: '12px',
                display: 'block',
                mx: 'auto',
                border: '8px solid #fff',
                boxShadow: (t) =>
                  t.palette.mode === 'light'
                    ? '0px 0px 30px rgba(0, 0, 0, 0.2)'
                    : '0px 8px 30px rgba(0, 0, 0, 0.6)',
              }}
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'text.primary',
                fontWeight: 'bold',
                textAlign: 'justify',
                p: 2,
              }}
            >
              Hi Guys!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', md: '1.3rem', letterSpacing: '2' },
                color: 'text.primary',
                textAlign: 'justify',
                p: 2,
              }}
            >
              I'm <strong>kholoud mahmoud</strong>, a passionate developer with
              expertise in building dynamic and responsive web applications. I
              love creating user-friendly interfaces and bringing ideas to life
              through code. Let's connect and create something amazing together!
            </Typography>

            {/* info details */}
            <Box sx={{ p: 2 }}>
              {[
                { label: 'Name', value: 'Kholoud Mahmoud' },
                { label: 'Age', value: '35' },
                { label: 'Country', value: 'Alexandria, Egypt' },
                { label: 'Experience', value: 'Junior' },
                { label: 'Email', value: 'kholud.mahmoud62@gmail.com' },
                { label: 'Phone', value: '00201014500049' },
                { label: 'Freelance', value: 'Available' },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  {/* Label */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      width: 120,
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                    }}
                  >
                    {item.label}
                  </Typography>

                  {/* Colon */}
                  <Typography sx={{ fontWeight: 'bold', mr: 2 }}>:</Typography>

                  {/* Value */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      fontSize: { xs: '0.9rem', md: '1.3rem' },
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
            {/* buttons */}
            <Box sx={{ textAlign: 'center' }}>
              <Button onClick={handleViewResume}
                variant="contained"
                sx={{
                  mt: 3,
                  padding: '4 6',
                  marginRight: 4,
                  backgroundColor: 'primary.main',
                  borderRadius: 3,
                  '&:hover': { backgroundColor: '#96b8daff' },
                }}
              >
                Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
