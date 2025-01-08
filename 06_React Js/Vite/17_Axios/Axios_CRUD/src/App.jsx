import { useEffect, useState } from "react";
import { getPost, deletePost } from "./pages/PostsApi";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState({

  });

  // handle display post in document
  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
      setLoading(false);
    }
    catch(error) {
      
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // handle delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        setData(data.filter((currPost) => currPost.id !== id));
      }
    } catch (error) {
      console.log(error)
    }
  };

  // handle update post
  const handleUpdatePost = (currEl) => setUpdateData(currEl);

  return (
    <>
      <h1 style={{textAlign: 'center', padding: '10px', position: 'sticky', top: '0', backgroundColor: '#636363'}}>Axios Posts Api</h1>
      <Form data={data} setData={setData} updateData={updateData} setUpdateData={setUpdateData}/>
      <div>
          {loading && <strong>Loading...</strong>}
        <ol>
          {data.map((currEl) => (
            <li key={currEl.id}>
              <h3>{currEl.title}</h3>
              <p>{currEl.body}</p>
              <div style={{display: 'flex', gap: '10px'}}>
                <button onClick={() => handleUpdatePost(currEl)}>Edit</button>
                <button onClick={() => handleDeletePost(currEl.id)}>
                Delete
              </button></div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
