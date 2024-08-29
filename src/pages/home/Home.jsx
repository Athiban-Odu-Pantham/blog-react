import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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

  const handleEdit = (post) => {
    navigate('/write', { state: { post } });
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  const handleView = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div className="post" key={post._id} onClick={() => handleView(post._id)}>
              {post.image && <img src={post.image} alt="Post" className="post-image" />}
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.content.substring(0, 100)}...</p> {/* Show a preview of the content */}
              </div>
              <div className="post-actions">
                <button onClick={(e) => { e.stopPropagation(); handleEdit(post); }}>Edit</button>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(post._id); }}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
