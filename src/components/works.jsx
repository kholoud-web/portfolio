import Projects from './projects';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import { Box, Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';

export default function Works() {
  return (
    <Box
      component="section"
      id="works"
      sx={{ py: 10, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold', color: 'text.primary' }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {Projects.map((project, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={project.title}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  '&:hover .overlay': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {/* صورة المشروع */}
                <Box
                  component="img"
                  loading="lazy" 
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />

                {/* الـ Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#fff',
                    p: 2,
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'all 0.4s ease-in-out',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.tech}
                  </Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        mr: 1,
                        backgroundColor: '#1976d2',
                        '&:hover': { backgroundColor: '#64b5f6' },
                      }}
                      href={project.demo}
                      target="_blank"
                    >
                      Demo
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                      href={project.code}
                      target="_blank"
                    >
                      Code
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
