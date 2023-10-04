import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'


const Home = () => {

  const [auth, setAuth] = useAuth()

  
  return (
    <Layout title={"Best Offers"}>
        <div className="home">
        <h1>Home Page</h1>
        <p>{JSON.stringify(auth)}</p>
        </div>
    </Layout>
  )
}

export default Home
