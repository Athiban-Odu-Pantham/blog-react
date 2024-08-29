import React, { useState } from 'react';
import './write.css';
import axios from 'axios';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, content, image: image ? URL.createObjectURL(image) : null };

    try {
      await axios.post('http://localhost:5000/api/posts', newPost);
      resetForm();
    } catch (err) {
      console.error('Failed to save post:', err);
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write your story here..."
            className="writeInput writeText"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <span>Add an Image</span>
            <input
              type="file"
              id="fileInput"
              accept=".jpg, .jpeg, .png, .gif"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </label>
        </div>
        {image && <img src={URL.createObjectURL(image)} alt="Selected" className="selectedImage" />}
        <button type="submit" className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
