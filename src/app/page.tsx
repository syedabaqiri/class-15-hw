import React from 'react'


async function fetchPosts(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts

}   

const Postspage = async () => {
    const posts = await fetchPosts();

    return (
        <div>
            <h1>show Posts</h1>

            <ul>{posts.map((post: {id: number; title:string})=>(
                <li key= {post.id}>
                    <a href={`/posts/${post.id}`} >
                    {post.title}
                    </a>
                </li>
            ))}
                </ul>
        </div>
    );
};
export default Postspage