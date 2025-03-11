import React from 'react'
import "./Posts.css";
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Posts({image, profilePic, username, caption, timestamp}) {
  return (
    <div className='posts'>
        <div className="top__part">
            <Avatar src={profilePic} className='profilePic'/>
            <div className="post_topInfo">
                <h3>{username}</h3>
                <p>{timestamp ? new Date(timestamp.toDate()).toLocaleString() : "Loading..."}</p>
            </div>
        </div>
        <div className="post__bottom">
            <p>{caption}</p>
        </div>
        <div className="post__image">
            <img src={image} alt='' />
        </div>
        <div className="reactions">
            <div className="reaction">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className="reaction">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            <div className="reaction">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className={`reaction extraClass`}>
                <AccountCircleIcon />
                <ExpandMoreIcon />
            </div>
        </div>
    </div>
  )
}

export default Posts