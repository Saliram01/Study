import React, { useEffect, useState } from 'react'
import { postData } from '../pages/PostsApi';

function Form({data, setData, updateData, setUpdateData}) {
    const [addData, setAddData] = useState({
        title: '',
        body: '',
    });

    const isEmpty = Object.keys(updateData).length === 0;

    // update post
    useEffect(() => {
        updateData && setAddData({
            title: updateData.title || '',
            body: updateData.body || '',
        })
    },[updateData]);

    // set new data in previous data
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddData(prev => {return{...prev,[name]:value}});
    }

    // Add post
    const addPostData = async() => {
        const res = await postData(addData);
        if(res.status === 201) {
            setData([...data, res.data]);
        }
    }

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addPostData();
        setAddData({ title: '', body: '' })
    }

  return (
    <form onSubmit={handleSubmit} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        width: '100%',
        maxWidth: '450px',
        padding: '10px',
        gap: '5px',
        margin: '20px auto',
        position: 'sticky',
        top: '2px',
    }}>
        <div>
            <input style={{
                padding: '5px',
                width: '100%',
                maxWidth: '100%',
                outlineColor: 'orange'
            }} type="text" name='title' value={addData.title} onChange={handleInputChange} placeholder='Add title'/>
        </div>
        <div>
            <input style={{
                padding: '5px',
                width: '100%',
                maxWidth: '100%',
                outlineColor: 'orange'
            }} type="text" name='body' value={addData.body} onChange={handleInputChange} placeholder='Add post'/>
        </div>
        <button type='submit' style={{
            padding: '5px',
            cursor: 'pointer',
            width: '80px'
        }}>{isEmpty ? 'ADD' : 'Edit'}</button>
    </form>
  )
}

export default Form
