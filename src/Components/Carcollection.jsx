 
import React from 'react'
import './Car.css';
import { useNavigate } from 'react-router-dom';

function  Carcollection({Data}) {
 const navigate = useNavigate();

 const handleViewDetails = () => {
   navigate(`/Product/${Data.id}`);
 };
 return ( 
 
   
<div   id='swiper-slide '>
 <img 
        className="m-2   "
        src={`../src/assets/${Data.img}`}
        alt={Data.brand}   />  

        <div className='items-center  justify-center '>
         <h2 className="card-title text-center items-center  text-black ">
          {Data.brand}
         </h2>

           <button className='view-more-btn  
            ml-28 bg-gradient-to-r from-slate-700  
             to-slate-200
             text-black
              p-2
              mb-2 rounded-lg
              ' 
            onClick={handleViewDetails}>
            View More
            </button>
       </div>
</div>

)
};

export default Carcollection;




