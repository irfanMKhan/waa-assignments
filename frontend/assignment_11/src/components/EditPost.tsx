import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(post => post.id === parseInt(id || ''));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log the updated title and content to the console (can be replaced with API call)
    console.log('Updated post:', { id: post.id, title, content });
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
