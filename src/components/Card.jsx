import React, { useContext, useState } from "react";
import { myContextApi } from "../context/MyContext";

const Card = () => {
  const { pixa, setImageType, setMyCategory } = useContext(myContextApi);
  const [searchTerm, setSearchTerm] = useState(""); //

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    setImageType(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
    
      <div className="w-full bg-white shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-4">
      
        <input
          type="text"
          placeholder="Search by name"
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
          onChange={handleChange}
          value={searchTerm}
        />

        <div className="flex flex-wrap gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md "
            onClick={() => {
              setImageType("illustration");

              setMyCategory("animals");
            }}
          >
            animals
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md "
            onClick={() => {
              setImageType("photo");

              setMyCategory("religion");
            }}
          >
            religion
          </button>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-md "
            onClick={() => {
              setImageType("all");

              setMyCategory("nature");
            }}
          >
            nature
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-md "
            onClick={() => {
              setImageType("all");

              setMyCategory("food");
            }}
          >
            food
          </button>
        </div>
      </div>

   
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pixa.length > 0 ? (
            pixa.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.largeImageURL}
                  alt={item.tags || "Image"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-sm">
                    {item.tags || "No description"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No data found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;