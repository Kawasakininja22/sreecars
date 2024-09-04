

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CollectionItem = ({ collection }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Product/${collection.id}`);
  };

  return (
  <div  class='container justify-center items-center'>
    <div className='w-full -ml-4 md:ml-0'>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1   ">
      <div class=" w-full md:w-100 rounded-lg overflow-hidden  shadow-xl shadow-zinc-400  ">
        {/* image section */}
        <img
          class="w-100  lg:w-full h-52 "
          src={`../src/assets/${collection.img}`}
          alt={collection.brand}
       
        />

        <div class="card-body flex p-2">
          <h2 class="card-title   "  >
            {collection.brand}
          </h2>

          {/* div for price */}
          <h3 class="  ml-28 lg:ml-36 w-40">
            <span>$</span> {collection.price}
          </h3>
        </div>
        <button class="bg-gradient-to-r from-zinc-900 to-slate-400 text-white w-full p-4" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
      </div>
    </div>
    </div>
   
  );
};


export const CollectionList = ({ collections }) => {
  const limitedCollections = collections.slice(0, 6);
  return (
    <>
      {limitedCollections.map((collection) => (
        <CollectionItem key={collection.id} collection={collections} />
      ))}
    </>
  );
};

// Add this export if it was intended to be used in NavCollection.jsx
export const Collections = CollectionItem;

 