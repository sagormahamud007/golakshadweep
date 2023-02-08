import React from 'react';
import { AiFillStar } from "react-icons/ai";
const islands=[
    {
id:1,
title:"Kavaratti",
description:"Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAMiuOT8qA0RoIHYUFrstAC5b1BG7ZGyICA&usqp=CAU",
review:"(1.5k Review)"
},
    {
id:2,
title:"Kavaratti",
description:"Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3Ee3j5Natpsnz0kG-yD6BTqIp1dwi7bp_g&usqp=CAU",
review:"(1.5k Review)"
},
    {
id:3,
title:"Kavaratti",
description:"Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEAvJkVKnxUyD039o1TJnelkOdujFi3wVuA&usqp=CAU",
review:"(1.5k Review)"
},
    {
id:4,
title:"Kavaratti",
description:"Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zheI6ZZed_XTV9TVyga_z3V-MnNyEk9NuTMbobl0GvghL7r7AnKB4aM1Y9Ntn6CLB1Q&usqp=CAU",
review:"(1.5k Review)"
},
    {
id:5,
title:"Kavaratti",
description:"Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiL-D0U7RkCz2SikqUVQt_JouF0jNKiKqcA&usqp=CAU",
review:"(1.5k Review)"
},
    {
id:6,
title:"Kavaratti",
description:"Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGIVWzb1wHn9y_e2eHc8nB9E2m24CPAhMmQ&usqp=CAU",
review:"(1.5k Review)"
}
]

const IslandStays = () => {
    return (
        <div>
           <div className='text-center mt-16'>
           <h1 className='text-3xl mb-2 font-bold'>Island Stays</h1>
            <p className='font-Sans font-2xl'>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious <br/>
            modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
           </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-16 gap-5'>
            {
                islands.map(island=><>
                <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-80' src={island.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{island.title}</h2>
    <p>{island.description}</p>
   
    <div className="card-actions justify-end">
    <p className='flex items-center mt-5'> <AiFillStar className='mr-3 text-yellow-400'></AiFillStar> <span className='font-bold'>1.5</span> {island.review}</p>
      <button className="btn btn-active mt-4 border-none " style={{backgroundColor:"#3282AD"}}>Explore More</button>
    </div>
  </div>
</div>
                </>)
            }
        </div>
        </div>
    );
};

export default IslandStays;