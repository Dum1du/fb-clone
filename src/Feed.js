import React, { useEffect, useState } from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import PostingArear from './PostingArear';
import Posts from './Posts';
import db from './firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function Feed() {

  const [post, setPost] = useState([]);

  useEffect(() =>{
    const postCollection = query(collection(db, "posts"), orderBy("timestamp", "desc"));
   
    const unSubscribe = onSnapshot(postCollection, (snapshot) => {
      setPost(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data(),
      })))
    });

    return () => unSubscribe();
  },[]);
  return (
    <div className='feed'>
        {/* Story area */}
        
        <PostingArear />
        <StoryReel />
        
        {
            post.map((posts) => (
              <Posts
                key={posts.id}
                image={posts.data.image} 
                profilePic={posts.data.profilePic} 
                username={posts.data.userName} 
                caption={posts.data.caption} 
                timestamp={posts.data.timestamp}
              />
            ))
                    
        }
    </div>
  )
}

export default Feed;