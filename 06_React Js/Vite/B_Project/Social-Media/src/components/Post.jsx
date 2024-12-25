import React, { useContext } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { PostListData } from "../store/PostListProvider";

function Post({post}) {
  const {deletePost} = useContext(PostListData);
  const body = post.body.length > 150 ? post.body.slice(0,150) + "..." : post.body;
  return (
    <>
      <div className="card my-4 shadow" key={post.id} style={{width: '17rem', margin: 'auto'}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}
              <span className="position-absolute top-0 start-100 translate-middle p-2  border border-light rounded-circle" onClick={() => deletePost(post.id)}>
              <span><IoIosRemoveCircle /></span>
               </span>
          </h5>
          <p className="card-text">{body}</p>
          {post.tags.map((tag) => <span key={tag} className="badge bg-primary me-1">{tag}</span>)}
          <div className="alert alert-success mt-4 py-1 d-flex justify-content-between" role="alert">
            <span>Likes : {post.reactions.likes}</span> <span>Dislikes : {post.reactions.dislikes}</span>
        </div>
        </div>
      </div>
    </>
  );
}

export default Post;