document.addEventListener('DOMContentLoaded', async () => {
    const posts = await fetch('/api/posts').then(res => res.json());    const postList = document.getElementById('posts');    posts.forEach(post => {
        const li = document.createElement('li');        li.textContent = post.title;
        postList.appendChild(li);});});