import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="static" className={theme}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, textDecoration: 'none' }}
          component={Link}
          to="/"
          className="navbar-text"
        >
          User List App
        </Typography>
        <Button color="inherit" component={Link} to="/">Homepage</Button>
        <Button color="inherit" component={Link} to="/details">User Detail Page</Button>
        <Button
          color="inherit"
          onClick={toggleTheme}
          className="theme-toggle-btn"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
