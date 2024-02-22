import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { WelcomeLogin, AdminDashboard, SignIn, SignUp, UserDashboard } from './pages'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../theme'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const App = () => {
  //grab the state we created
  const mode = useSelector(state => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //provide light and dark mode


  return (
    //Setting up material UI
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeLogin />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
    <CssBaseline />
    </ThemeProvider>
  )
}

export default App
