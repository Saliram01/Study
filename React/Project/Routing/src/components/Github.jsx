import React, { useEffect, useState } from "react";
import SimmerGithub from "./SimmerGithub";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

//   const [data, setFollowers] = useState([]);

//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//       .then((res) => res.json())
//       .then((data) => {
//         setFollowers(data);
//       });
//   }, []);
//   console.log(data);

  return !data ? <SimmerGithub/> : (
    <div className="github">
      <h3> {data.name + ' :'} {data.followers} </h3>
      <img src={data.avatar_url} width={150}/>
    </div>
  );
}

export default Github;


export const githubLoader = (async () => {
  const res = await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json();

})

