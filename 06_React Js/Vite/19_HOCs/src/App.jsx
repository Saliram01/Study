import React from 'react'
import WithData from './components/withData';
import PostList from './components/PostList'

const PostListWithData = WithData(PostList,"https://jsonplaceholder.typicode.com/posts");

function App() { return <PostListWithData/> };

export default App
