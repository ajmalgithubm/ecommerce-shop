import { useState, useEffect} from 'react';
import { useAuth } from '../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

export default function PrivateRoute(){
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async() => {

            console.log("auth is ",auth)
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`, {
               token : auth.token
            });
            const {ok} = data;
            if(!ok){
                setOk(false)
            }else{
                setOk(true)
            }
        }
        if(auth?.token){
            authCheck()
        }
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner/>
}