import React from 'react'
import "./PostingArear.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function PostingArear() {
    const handleButtonSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='posting__area'>
        <div className="posting__top">
        <Avatar />
            <form>
                <input className='input__text' placeholder={`What's on your mind? `} />
                <input placeholder='Image url (optional)' />
                <button onClick={handleButtonSubmit} type='submit'>
                    hidden button
                </button>
            </form>
        </div>
        <div className="posting__bottom">
           <div className="posting__option">
                <VideocamIcon style={{color:"red"}} />
                <h3>Live video</h3>
           </div>
           <div className="posting__option">
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Photo/ video</h3>
           </div>
           <div className="posting__option">
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>Feeling/ Activity</h3>
           </div>
        </div>

    </div>
  )
}

export default PostingArear