import React from 'react'
import "./Story.css";
import { Avatar } from '@mui/material';

function Story({Pic, Profilesrc, Name}) {
  return (
    <div style={{ backgroundImage: `url(${Pic})` }} className='story'>
        <Avatar className='story__avatar' src={Profilesrc} />
        <h4>{Name}</h4>
    </div>
  )
}

export default Story