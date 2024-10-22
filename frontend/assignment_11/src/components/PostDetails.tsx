import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id || ''));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      <br />
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
};

export default PostDetails;