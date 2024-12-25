import React, { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/PostListProvider";
import Message from "./Message";
import Loading from "./Loading";

function PostList() {
  const { postList ,fetching } = useContext(PostListData);
  
  return (
    <div className="d-flex flex-wrap bg-light">
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Message />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
