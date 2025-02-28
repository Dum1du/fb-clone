import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import PostingArear from './PostingArear';

function Feed() {
  return (
    <div className='feed'>
        {/* Story area */}
        <StoryReel />
        <PostingArear />

    </div>
  )
}

export default Feed;