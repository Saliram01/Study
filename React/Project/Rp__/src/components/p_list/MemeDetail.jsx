import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function MemeDetail() {
    const params = useParams()
    const id = Number(params.id)
    const [memeData , setMeme] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then((res) => res.json())
        .then((memes) => {
            console.log(memes.data.memes);
        });
    },[])

  return (
    <div>
        <img src={memeData.url} alt="" />
    </div>
  )
}

export default MemeDetail