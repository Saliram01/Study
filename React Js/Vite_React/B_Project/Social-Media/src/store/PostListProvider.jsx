import React, { createContext, useCallback, useReducer, useState } from 'react'
import { useEffect } from 'react';

export const PostListData = createContext({
    postList : [],
    addPost : () => {},
    fetching : false,
    deletePost : () => {},
});

function postListReducer(currentPostList, action) {

  let newPostList = currentPostList;

  if(action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
  }
  else if(action.type === 'ADD_INITIAL_POSTS') {
    newPostList = action.payload.posts;
  }
  else if(action.type === "ADD_POST") {
    newPostList = [action.payload,...currentPostList];
  }
  return newPostList;
}

function PostListProvider({children}) {
   const [postList, dispatchPostList] = useReducer(postListReducer,[]);
   const [fetching, setFetching] = useState(false);

   const addPost = (post) => {
    dispatchPostList({type : 'ADD_POST', payload : post,})
   };

   const addInitialPosts = (posts) => {
    dispatchPostList({type : 'ADD_INITIAL_POSTS', payload : {posts,},})
   };

   const deletePost = useCallback((postId) => {
    dispatchPostList({type : 'DELETE_POST', payload: {postId}})
   },[dispatchPostList]);

   useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return () => {
        // controller.abort();
      }
      
  }, []);

  return (
    <PostListData.Provider value={{postList,addPost,fetching,deletePost}}>
      {children}
    </PostListData.Provider>
  )
}

export default PostListProvider;