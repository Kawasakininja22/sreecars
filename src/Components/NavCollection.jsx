
import React from 'react';
import {Collections} from './Collection.jsx';
import data from './Collection.json';
 

export const NavCollection = () => {
  return (
    <div className="container my-4 bg-white">
      <h2 className="text-black items-center text-center p-10 text-2xl">Car Collections</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 ">
        {data.map((collection) => (
          <Collections key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default NavCollection;
