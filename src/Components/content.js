import React, { useState, useEffect } from "react";
import Search from "./search";
import Table from "./table";
let temp = null;
export default function Content({ data }) {
  const [filteredArr, setfilteredArr] = useState(data);
  const [City, setCity] = useState("");
  const [StreetName, setStreetName] = useState("");
  const [PostCode, setPostCode] = useState("");
  const [distance, setDistance] = useState({ from: 0, to: 10 });

  temp = [...data];

  const handleCity = async (e, v) => {
    setCity(e);
  };
  const handleStreetName = (e, v) => {
    setStreetName(e);
  };
  const handlePostCode = (e, v) => {
    setPostCode(e);
  };

  const handleDistance = (data) => {
    setDistance(data);
  };

  useEffect(() => {
    setfilteredArr(
      (temp = temp.filter(
        (e) =>
          e.city
            .toString()
            .toUpperCase()
            .includes(City.toString().trim().toUpperCase()) &&
          e.postcode
            .toString()
            .toUpperCase()
            .includes(PostCode.toString().trim().toUpperCase()) &&
          e.street_name
            .toString()
            .toUpperCase()
            .includes(StreetName.toString().trim().toUpperCase())
      ))
    );

    temp.length >= 10
      ? setDistance({ from: 0, to: 10 })
      : setDistance({ from: 0, to: temp.length });
  }, [City, StreetName, PostCode]);

  return (
    <div>
      <h1 className="my-5" style={{ textAlign: "center" }}>
        Random Address Api
      </h1>
      <Search
        handleCity={handleCity}
        handleStreetName={handleStreetName}
        handlePostCode={handlePostCode}
      />
      <Table
        filteredArr={filteredArr}
        handleDistance={handleDistance}
        distance={distance}
      />
    </div>
  );
}
