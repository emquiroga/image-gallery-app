import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const peticion = useCallback(
    async (endpoint = "") => {
      const accessKey = "client_id=kRf39JhQNCnVkpOiHDifN5e4FfNNpSpi5J_GGQXGKr0";
      let route = `https://api.unsplash.com/photos/?${accessKey}`;
      if (input !== "") {
        route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
          input
        )}&${accessKey}`;
      }
      const res = await fetch(route);
      const data = await res.json();
      if (data.results) {
        setImages(data.results);
      } else {
        setImages(data);
      }
    },
    [input]
  );

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputText" className="w-75">
          Buscar:
          <input type="text" name="inputText" className="w-75" />
        </label>
        <button type="submit" className="btn btn-info mx-2">
          <span className="material-icons">search</span>
        </button>
      </form>
      <hr />
      <div className="row">
        {images.map((img) => {
          return (
            <div className="col" key={img.id}>
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
