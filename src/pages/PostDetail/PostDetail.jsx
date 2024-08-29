import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './postdetail.css'; // Add your CSS here

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        if (res.status === 200) {
          setPost(res.data);
        } else {
          setError(`Error: ${res.status} ${res.statusText}`);
        }
      } catch (err) {
        setError(`Failed to load post: ${err.message}`);
        console.error('Failed to load post:', err);
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div className="postdetail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {post.image && <img src={`http://localhost:5000${post.image}`} alt="Post" />}
    </div>
  );
}
