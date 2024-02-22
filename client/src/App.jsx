import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomeLogin, AdminDashboard, SignIn, SignUp, UserDashboard, Layout } from './pages';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const App = () => {
  // Grab the state we created
  const mode = useSelector(state => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // Provide light and dark mode

  return (
    // Setting up Material UI
    <ThemeProvider theme={theme}> {/* Move ThemeProvider here to wrap the entire app */}
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<WelcomeLogin />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
