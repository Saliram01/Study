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

  return (
    <div className="w-full h-[712px] flex justify-center items-center bg-slate-600 text-white">
      <div className="rounded-2xl flex justify-center items-center pr-16 border">
        <div className="p-8">
          <img
            src={
              data.products && data.products[1]
                ? data.products[1].thumbnail
                : ""
            }
          />
        </div>
        <div className="text-2xl">
          <h1 className="mb-4 text-pink-400 font-semibold">
            Title:{" "}
            {data.products && data.products[1] ? data.products[1].title : ""}
          </h1>
          <h1 className="mb-4 text-pink-400 font-semibold">
            Price: $
            {data.products && data.products[1] ? data.products[1].price : ""}
          </h1>
          <h1 className="mb-4 text-pink-400 font-semibold">
            DiscountPercentage: $
            {data.products && data.products[1]
              ? data.products[1].discountPercentage
              : ""}
          </h1>
          <h1 className="mb-4 text-pink-400 font-semibold">
            DiscountTotal: $
            {data.products && data.products[1]
              ? data.products[1].discountedTotal
              : ""}
          </h1>
          <h1 className="text-pink-400 font-semibold">
            Total: $
            {data.products && data.products[1]
              ? data.products[1].total
              : ""}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
