const express = require('express');const bodyParser = require('body-parser');const path = require('path');const app = express();const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());app.use(bodyParser.urlencoded({ extended: true }));app.use(express.static(path.join(__dirname, 'public')));app.use(express.static(path.join(__dirname, 'dashboard')));let posts = [];// API to get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);});

// API to create a new post
app.post('/api/posts', (req, res) => {
  const { title, content} = req.body;
  const newPost = { title, content}; posts.push(newPost);  res.json(newPost);});

// API to delete a post
app.delete('/api/posts/:title', (req, res) => {
  posts = posts.filter(post => post.title!== req.params.title);  res.json({ message: 'Post deleted' });});

// Serve the main index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));});

// Serve the dashboard page
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));});app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);});