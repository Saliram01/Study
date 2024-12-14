import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetail() {
  const [data, setData] = useState([]);
  const param = useParams();
  const paramId = Number(param.id);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/carts");
      const data = await res.json();
      let newData = data.carts;
      newData.map((el) => {
        if (el.products[1]?.id === paramId) {
          setData(el);
        }
      });
    })();
  }, [param.id]);

  if(data.length === 0) {
    return <h1 className="text-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>
  }

  return (
    <div className="w-full h-[712px] flex justify-center items-center bg-slate-600 text-white">
      <div className="sm:flex justify-center items-center rounded-xl sm:shadow sm:border shadow-white">

        <div className="p-8">
          <img src={data.products && data.products[1] ? data.products[1].thumbnail : ""} width={200} height={200}/>
        </div>

        <div className="text-xl sm:w-[50%]">
          <h1 className="mb-2 text-pink-400">
            <span className="font-bold text-green-500">Title: </span>
            {data.products && data.products[1] ? data.products[1].title : ""}
          </h1>
          <h1 className="mb-2 text-pink-400">
            <span className="font-bold text-green-500">Price: </span>
            {data.products && data.products[1] ? data.products[1].price : ""}
          </h1>
          <h1 className="mb-2 text-pink-400">
            <span className="font-bold text-green-500">DiscountPercentage: </span>
            {data.products && data.products[1] ? data.products[1].discountPercentage : ""}
          </h1>
          <h1 className="mb-2 text-pink-400">
            <span className="font-bold text-green-500">TotalDiscount: </span>
            {data.products && data.products[1] ? data.products[1].discountedTotal : ""}
          </h1>
          <h1 className="text-pink-400">
            <span className="font-bold text-green-500">Total: </span>
            {data.products && data.products[1] ? data.products[1].total : ""}
          </h1>
        </div>

      </div>
    </div>
  );
}

export default CardDetail;
