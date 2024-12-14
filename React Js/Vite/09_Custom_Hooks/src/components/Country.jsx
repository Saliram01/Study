import React, { useContext } from "react";
import Card from "./Card";
import { CountryContext } from "../context/Context";
import Navigator from './Navigation'

function Country() {
  const { data, search, region, theme } = useContext(CountryContext);

  return (
    <>
    <Navigator/>
      <div className="Country-container">
        {data[0]
          .filter((srch) => srch.name.common.toLowerCase().includes(search))
          .filter((reg) => reg.region.includes(region))
          .map((list, idx) => (
            <Card key={idx} list={list} theme={theme} />
          ))}
      </div>
    </>
  );
}

export default Country;
