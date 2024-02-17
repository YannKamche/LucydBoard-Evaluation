import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { WelcomeLogin, AdminDashboard, SignIn, SignUp, UserDashboard } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeLogin />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
