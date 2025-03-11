import React from 'react'
import "./Login.css";
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

  const [state, dispatch] = useStateValue();
    const signIn = async () =>{
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;  // Get the signed-in user's details

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        console.log(user);
      } catch (error) {
        console.error("Error signing in:", error.message); // Handle errors
        alert(error.message);
      }
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/75px-2023_Facebook_icon.svg.png'
            alt=''/>
            
            <img style={{height:"20px", marginTop:"20px"}} src='
            https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/175px-Facebook_logo_%282023%29.svg.png
            ' alt=''/>
        </div>
        <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login