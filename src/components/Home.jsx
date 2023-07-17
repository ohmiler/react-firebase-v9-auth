import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap'

function Home() {

    const { logOut, user } = useUserAuth();

    console.log(user);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch(err) {
            console.log(err.message);
        }
    }

  return (
    <div>
        <h2>Welcome to home page</h2>
        <p>Hi, {user?.email}</p>
        <p>UID : {user?.uid}</p>
        <Button onClick={handleLogout} variant='danger'>Logout</Button>
    </div>
  )
}

export default Home