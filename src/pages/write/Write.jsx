import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './write.css'; // Import the CSS

export default function Write() {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (location.state && location.state.post) {
      const { title, content } = location.state.post;
      setTitle(title);
      setContent(content);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      if (location.state && location.state.post) {
        // Update existing post
        await axios.put(`http://localhost:5000/api/posts/${location.state.post._id}`, formData);
      } else {
        // Create new post
        await axios.post('http://localhost:5000/api/posts', formData);
      }
      navigate('/');
    } catch (err) {
      console.error('Failed to save post:', err.response || err.message);
    }
  };

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write your story here..."
            className="writeInput writeText"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="file"
            className="writeInput"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="writeSubmit">
          {location.state && location.state.post ? 'Update' : 'Publish'}
        </button>
      </form>
    </div>
  );
}
