import React from 'react'

function PostList({loading,error,data}) {

    if(loading) return <p>Loading...</p>;

    if(error) return <p>Error: {error}</p>

  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {
                data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
            }    
        </ul>
    </div>
  )
}

export default PostList
