import { createContext, useEffect, useState } from "react";

const myContextApi = createContext();

const MyContextProvider = ({ children }) => {
  const [pixa, setPixa] = useState([]);

  const [imageType, setImageType] = useState("nature");
  const[myCategory , setMyCategory]=useState('animals')

  const fetchData = async () => {
    const raw = await fetch(
      `https://pixabay.com/api/?key=47161768-5f77be945b728098753b692ab&q=${imageType}&category=${myCategory}`
    );
    const data = await raw.json();

    setPixa(data.hits || []);
  };

  useEffect(() => {
    fetchData();
  }, [imageType]);

  return (
    <myContextApi.Provider value={{ pixa, imageType, setImageType,setMyCategory }}>
      {children}
    </myContextApi.Provider>
  );
};

export { myContextApi, MyContextProvider };