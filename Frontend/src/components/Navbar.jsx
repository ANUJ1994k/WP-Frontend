import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography  variant="h6" style={{ flexGrow: 1, textDecoration: "none", color:"white" }}
          component={Link} to="/">
          User List App
        </Typography>
        <Button color="inherit" component={Link} to="/">Homepage</Button>
        <Button color="inherit" component={Link} to="/details">User Detail Page</Button>
        <button onClick={ThemeToggle}>Toggle Theme</button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
