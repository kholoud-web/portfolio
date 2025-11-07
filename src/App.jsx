import './App.css';
import NavBar from './components/appBar';
import Hero from './components/hero';
import Info from './components/info';
import Works from './components/works';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from './components/theme';
import { useState, useMemo, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import ContactForm from './components/contact';

function App() {
  const storedMode = localStorage.getItem('themeMode') || 'light';
  const [mode, setMode] = useState(storedMode);

  //nav bar menu
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const handleToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // save theme in local storage
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar mode={mode} handleToggle={handleToggle} navItems={navItems} />
      <Hero />
      <Info />
      <Divider
        sx={{ width: '80%', textAlign: 'center', margin: 'auto', mt: '50px' }}
      />
      <Works />
      <Divider
        sx={{ width: '80%', textAlign: 'center', margin: 'auto', mt: '50px' }}
      />
      <ContactForm />
    </ThemeProvider>
  );
}

export default App;
