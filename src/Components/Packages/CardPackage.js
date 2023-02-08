import React from 'react';

const CardPackage = ({card}) => {
    return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-80' src={card.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {card.title}
    </h2>
    <p>{card.description}</p>
    <div className="card-actions justify-center">
    <button className="btn btn-active mt-4 border-none px-16" style={{backgroundColor:"#3282AD"}}>Book Now</button>
    </div>
  </div>
</div>
    );
};

export default CardPackage;