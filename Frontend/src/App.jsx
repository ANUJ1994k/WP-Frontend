import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { UserProvider } from "./contexts/UserContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UserDetails from "./pages/userDetails";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
