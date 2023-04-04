import React, { useEffect, useState } from 'react'

function Learnmore() {

    const [posts, setPosts] = useState([])


    useEffect(() => {

const getPosts = async (url) => {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Error status: ${response.status}`)

    }
    const responseData = await response.json();
    setPosts(responseData);
}

getPosts('https://jsonplaceholder.typicode.com/posts');

    }, [])








    return (
        <>
    <h1> POST</h1>

    {posts.map(post => <a >{post.title}</a>)}
 


        </>
    )
}

export default Learnmore