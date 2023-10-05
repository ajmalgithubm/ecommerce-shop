import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { AiFillShopping } from "react-icons/ai";
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const onLogOut = () => {
        localStorage.removeItem("auth");
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-white p-3">
                <Link className="navbar-brand">🛒ECommerce app</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category' className="nav-link">Category</NavLink>
                        </li>
                        {
                            !auth.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to='/register' className="nav-link">Register</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/login' className="nav-link">Login</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink to='/login' onClick={onLogOut} className="nav-link">Logout</NavLink>
                                    </li>
                                </>
                            )
                        }
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">Orders</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/cart' className="nav-link">Cart {0}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header
