import React from 'react';
import img1 from "../../Asstes/avater/Ellipse 8 (1).png"
import img2 from "../../Asstes/avater/Ellipse 8.png"
import img3 from "../../Asstes/avater/Ellipse 9.png"
import Footer from '../Footer/Footer';
const aboutCard=[
    {
id:1,
name:"Roman Rey",
address:"Toranto, Canada",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
image:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
    {
id:2,
name:"Alex Tom",
address:"Toranto, Canada",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
image:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
    {
id:3,
name:"Finn Balor",
address:"Toranto, Canada",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue.",
image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}
]

const About = () => {
    return (
    <div>
            <div className='mb-60 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-16'>
            {
aboutCard.map(about=><>
<div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar">
        <div className="w-24 mx-auto rounded-full">
            <img src={about.image}/>
        </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{about.name}</h2>
          <p>{about.address}</p>
          <p>{about.description}</p>
          <div className="card-actions">
          <div className="rating mt-4">
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        </div>
          </div>
        </div>
      </div>
</>)
            }
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
    );
};

export default About;