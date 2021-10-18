import { useState, useEffect, useCallback } from "react";

export const useFetch = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);
  
    const peticion = useCallback(
      async (endpoint = "") => {
        const accessKey = "client_id=kRf39JhQNCnVkpOiHDifN5e4FfNNpSpi5J_GGQXGKr0";
        let route = `https://api.unsplash.com/photos/?${accessKey}`;
        if (input !== "") {
          route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
            input
          )}&${accessKey}`;
        }
        setLoading(true);
        const res = await fetch(route);
        const data = await res.json();
        if (data.results) {
          setImages(data.results);
        } else {
          setImages(data);
        }
        setLoading(false);
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
    return [images, loading, handleSubmit]
}

