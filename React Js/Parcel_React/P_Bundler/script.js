import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';


// destructured
function Card({ id, title, thumbnail, price }) {
    return (<div className='card-box' key={id}>
        <img src={thumbnail} alt="" width={150} />
        <div className="detail">
            <h3>{title}</h3>
            <p>Price ${price}</p>
        </div>
    </div>)
}
const root = createRoot(document.querySelector('#root'));
// root.render(<Card
//     id = '1'
//     thumbnail = 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
//     title = 'Apple 14 pro max'
//     price = '199'
// />)

// Destructured
// fetch('https://dummyjson.com/products')
//     .then(res => res.json()).then((data) => {
//         root.render(<div className='card-container'>{
//             data.products.map((e) => {
//                 return Card({
//                     id: e.id,
//                     title: e.title,
//                     thumbnail: e.thumbnail,
//                     price: e.price,
//                 })
//             })
//         }</div>)
//     })

// without destructured
// fetch('https://dummyjson.com/products')
//     .then(res => res.json()).then((data) => {
//         root.render(<div className='card-container'>{
//             data.products.map((e) => {
//                 return Card(
//                     e.id,
//                     e.title,
//                     e.thumbnail,
//                     e.price,
//                 )
//             })
//         }</div>)
//     })

// 3rd final
fetch('https://dummyjson.com/products')
    .then(res => res.json()).then((data) => {
        root.render(<div className='card-container'>{
            data.products.map((e) => {
                return <Card
                    key = {e.id}
                    title = {e.title}
                    thumbnail = {e.thumbnail}
                    price = {e.price}
                />
            })
        }</div>)
    })

// without destructured
// function Card(props) {
//     return (<div className='card-box' key={props.id}>
//         <img src={props.thumbnail} alt="" width={150} />
//         <div className="detail">
//             <h3>{props.title}</h3>
//             <p>Price ${props.price}</p>
//         </div>
//     </div>)
// }


// 2nd root stem// creating element
// root.render(React.createElement(Card,{
//     id: 1,
//     thumbnail : 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     title: 'Apple 14 pro max',
//     price: 199,
// }))


// 1st root// making props element obj
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,
//     ref: null,
//     props: {
//         id: 1,
//         thumbnail : 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//         title: 'Apple 14 pro max',
//         price: 199,
//     }
// })


