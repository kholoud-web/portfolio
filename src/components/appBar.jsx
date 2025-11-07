import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { Link } from 'react-scroll';


const drawerWidth = 240;

export default function NavBar({ mode, handleToggle, navItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src="/src/assets/images/logo.png" sx={{ my: 2 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                offset={-80}
                style={{
                  width: '100%',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                activeClass="active-link"
              >
                <ListItemText primary={item.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="default"
        sx={{
          backgroundColor: 'background.paper',
          paddingX: { md: 6, sm: 2 },
          paddingY: 1,
          color: 'text.primary',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'flex', md: 'flex', lg: 'none' },
              color: 'primary.main',
              border: '1px solid #1976d2',
              borderRadius: 0,
            }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="/public/logo.png"
            alt='Logo'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          ></img>
          <Box
            sx={{
              display: { xs: 'none', md: 'none', lg: 'flex' },
              color: 'text.primary',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={600}
                offset={-80}
                activeClass="active-link"
              >
                <Button
                  key={item}
                  sx={{
                    color: 'text.primary',
                    marginLeft: '15px',
                    fontSize: { xs: '0.95rem', md: '1.05rem', lg: '1.15rem' },
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.main',
                      transition: '0.3s ease-in-out',
                    },
                    '&.active-link': { color: 'primary.main' },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          {/* toggle mode button */}
          <IconButton onClick={handleToggle} color="text.primary">
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
