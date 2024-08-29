const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Path to JSON file
const postsFilePath = path.join(__dirname, 'posts.json');

// Function to read posts from JSON file
const readPosts = () => {
  const data = fs.readFileSync(postsFilePath);
  return JSON.parse(data);
};

// Function to write posts to JSON file
const writePosts = (posts) => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

// GET all posts
app.get('/api/posts', (req, res) => {
  try {
    const posts = readPosts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// GET a post by ID
app.get('/api/posts/:id', (req, res) => {
  try {
    const posts = readPosts();
    const post = posts.find(p => p._id === req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// POST a new post with image upload
app.post('/api/posts', upload.single('image'), (req, res) => {
  try {
    console.log("File received:", req.file); // Debugging: Check if file is received
    const posts = readPosts();
    const newPost = {
      _id: Date.now().toString(),
      title: req.body.title,
      content: req.body.content,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    };
    posts.push(newPost);
    writePosts(posts);
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error while uploading:", err); // Debugging: Log any errors
    res.status(500).send('Server error');
  }
});

// PUT (update) a post with image upload
app.put('/api/posts/:id', upload.single('image'), (req, res) => {
  try {
    console.log("File received for update:", req.file); // Debugging: Check if file is received
    let posts = readPosts();
    const index = posts.findIndex(p => p._id === req.params.id);
    if (index === -1) return res.status(404).send('Post not found');

    const updatedPost = {
      ...posts[index],
      title: req.body.title,
      content: req.body.content,
      image: req.file ? `/uploads/${req.file.filename}` : posts[index].image,
    };

    posts[index] = updatedPost;
    writePosts(posts);
    res.json(updatedPost);
  } catch (err) {
    console.error("Error while updating:", err); // Debugging: Log any errors
    res.status(500).send('Server error');
  }
});

// DELETE a post
app.delete('/api/posts/:id', (req, res) => {
  try {
    let posts = readPosts();
    posts = posts.filter(p => p._id !== req.params.id);
    writePosts(posts);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
