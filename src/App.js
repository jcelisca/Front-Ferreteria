import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./containers/Register";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Profile from './containers/Profile';
import Navbar from './components/Navbar';
import AuthProvider from './context/auth';
import Inventory from "./components/Inventory"
import "./assets/styles/app.css";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
