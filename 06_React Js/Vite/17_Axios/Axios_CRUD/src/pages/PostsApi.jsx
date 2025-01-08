import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// get method
export const getPost = () => api.get("/posts");

// delete method
export const deletePost = (id) => api.delete(`/posts/${id}`);

// post method
export const postData = (post) => api.post('/posts',post);

// put method // It is not used now
export const putPost = (id, post) => api.put(`/posts/${id}`,post);
