import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = () => {
    
    const [count , setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("Spinner usEffcet");
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount-=1);
        }, 1000)
        count === 0 && navigate("/login",{ state : location.pathname })
        return () => clearInterval(interval)

    }, [count, navigate, location])
    return (
        <>
            <div class="d-flex flex-column justify-content-center align-items-center" style={{minHeight:'100vh'}}>
                <h1>Redirecting into you in {count} second </h1>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading....</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
