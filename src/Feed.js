import React, {useEffect, useState} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase'

function Feed() {

    const [post, setposts] = useState([])

    useEffect (() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setposts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

  return (/*render anything from inside this*/
    <div className = "feed"> 
            {/*Home*/}
        <div className = "feed_header">         
            <h2>Home</h2>
        </div>

        {/*Tweetbox*/}
        <TweetBox />
        
      
        {/*post*/}

        {posts.map(post => (
            <Post 
                key={post.key}
                displayName={post.displayName}
                username={post.userName}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
            />
        ))}
        
        

    </div>
  )
}

export default Feed
