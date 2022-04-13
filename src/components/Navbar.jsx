import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { auth } from "../firebase/credentials";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

const Navbar = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [dropDown, setDropDown] = useState(false);

    const abrirCerrarDropDown =()=>{
        setDropDown(!dropDown);
    }

    const handleSignout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <h3>
                    <Link className="navbar-brand" to="/">Home</Link>
                </h3>
                {user ? (
                    <div>
                        <div className="btn-group">
                        <Dropdown isOpen={dropDown} toggle={abrirCerrarDropDown}>
                            <DropdownToggle className="btn btn-primary" caret>Categoria</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><Link to="/inventory">Inventario</Link></DropdownItem>
                                <DropdownItem><Link to="/proveedores">Proveedores</Link></DropdownItem>
                                <DropdownItem><Link to="/clientes">Clientes</Link></DropdownItem>
                                <DropdownItem><Link to="/ventas">Ventas</Link></DropdownItem>
                                <DropdownItem><Link to="/volantes">Volantes</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </div>
                        <Link className="navbar-brand" to="/profile">Perfil</Link>
                        <button className="btn btn-primary" onClick={handleSignout}>
                            <h5>Logout</h5>
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link className="navbar-brand" to="/register">Register</Link>
                        <Link className="navbar-brand" to="/login">Login</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;