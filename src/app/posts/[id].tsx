import React from 'react';


async function fetchPostById(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json(); 
  return post; 
}


const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPostById(params.id); 

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <a href="/posts" style={{ color: 'blue', textDecoration: 'underline' }}>
        Back to All Posts
      </a>
    </div>
  );
};

export default PostPage;
