document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('post-form');    const postList = document.getElementById('post-list');    // Fetch existing posts
    const posts = await fetch('/api/posts').then(res => res.json());    posts.forEach(post => {
        const li = document.createElement('li');        li.textContent = post.title;
        postList.appendChild(li);    });    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({ title, content }),        });        const newPost = await response.json();        const li = document.createElement('li');        li.textContent = newPost.title;
        postList.appendChild(li);        form.reset(); // Reset form fields
    });});