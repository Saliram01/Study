import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Services() {
    const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function Call() {
  //     try {
  //       const response = await fetch(
  //         "https://dummyjson.com/products"
  //       );
  //       const data = await response.json();
  //       setData(data.products);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   Call();
  // }, []);

  return (
    <div className="services">
      <div className="product">
       {
        data.products.map((items,i) => {
          return(
            <Link to={`/services/${items.id}`} key={i}>
              <div className="card">
                <img src={items.thumbnail} alt={items.brand} width={220} height={220}/>
                <div className="">
                  <p>{items.title}</p>
                </div>
              </div>
            </Link>
          )
        })
       }
      </div>
    </div>
  );
}

export default Services;


export const loaderFunction = (async () => {
  const response = await fetch("https://dummyjson.com/products");
  return await response.json();
})