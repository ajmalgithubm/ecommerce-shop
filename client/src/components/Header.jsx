import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { AiFillShopping } from "react-icons/ai";
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import Dashboard from './../pages/user/Dashboard';
import { useSearch } from '../context/Search'

const Header = () => {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const [value, setValue] = useSearch();

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
                        <form className="form-inline mr-3">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => setValue({ ...value, keyword: e.target.value })}
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate(`/search/${value?.keyword}`)
                                }}
                                >
                                    Search
                                </button>
                        </form>

                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category' className="nav-link">Category</NavLink>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {
                                    auth?.user?.name || "USER"
                                }
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    !auth.user ? (
                                        <>
                                            <NavLink to='/register' className="nav-link">Register</NavLink>
                                            <NavLink to='/login' className="nav-link">Login</NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`} className="nav-link">Dashboard</NavLink>
                                            <NavLink to='/login' onClick={onLogOut} className="nav-link">Logout</NavLink>
                                        </>
                                    )
                                }
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
