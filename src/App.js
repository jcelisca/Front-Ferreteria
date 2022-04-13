import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from "./containers/Register";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Profile from './containers/Profile';
import Navbar from './components/Navbar';
import AuthProvider from './context/auth';
import Inventory from "./components/Inventory";
import Cliente from "./components/Cliente";
import Proveedor from "./components/Proveedor";
import Venta from "./components/Venta";
import Volante from "./components/Volante";
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
          <Route path="/clientes" element={<Cliente />} />
          <Route path="/proveedores" element={<Proveedor />} />
          <Route path="/ventas" element={<Venta />} />
          <Route path="/volantes" element={<Volante />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
