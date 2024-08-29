import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Failed to load posts:', err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div className="post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post" />}
          </div>
        ))
      )}
    </div>
  );
}
