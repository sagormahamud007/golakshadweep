import React from 'react';
import img1 from '../../Asstes/Card-img/images (17) 1 (1).png'
import img2 from '../../Asstes/Card-img/images (17) 1 (2).png'
import img3 from '../../Asstes/Card-img/images (17) 1 (3).png'
import About from '../About/About';
import Contact from '../ContactUs/Contact';
import IslandStays from '../Island Stays/IslandStays';
import CardPackage from './CardPackage';


const packages=[
    {
id:1,
title:"Indonesia",
description:"Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjTdFgVAccqyPabF4S5rs_d9Me014IpcGDQ&usqp=CAU"
},
    {
id:2,
title:"Indonesia",
description:"Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdfxGOuM4k5yNqp4swj10Cu-XvjloHZ7p46-bvFeRbyoQ5cpLhsjJSCdIKExEioxZcYc&usqp=CAU"
},
    {
id:3,
title:"Indonesia",
description:"Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQM78rcVxmKu6-fuWFnVS1zRBPpH9NQCVBg&usqp=CAU"
}
]



const Packages = () => {
    
    return (
        <div>
<div className='px-14 border-r-0'>
           <div className='text-center mt-28'>
           <h1 className='text-5xl font-bold mb-4'>Best Packages For You</h1>
            <p className="font-sans font-medium">This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
           </div>

           <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mx-auto mt-8'>
            <div>
            <button className="py-3 btn-outline border  bg-white sm:w-full px-28 hover:bg-cyan-700">Maldives</button>
            </div>
            <div>
            <button className="py-3 btn-outline border  bg-white sm:w-full px-28 hover:bg-cyan-700">Samudram</button>
            </div>
            <div>
            <button className="py-3 btn-outline border bg-white sm:w-full px-28 hover:bg-cyan-700">Cordelia</button>
            </div>
            <div>
            <button className="py-3 btn-outline border bg-white sm:w-full px-28 hover:bg-cyan-700">Agatti</button>
            </div>
            <div>
            <button className="py-3 btn-outline border bg-white sm:w-full hover:bg-cyan-700 px-28">More</button>
            </div>
           </div>
        </div>
<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-16'>
{
    packages.map(card=><CardPackage
key={card.id}
card={card}
    >
    </CardPackage>
    )
}
</div>
<div className='text-center mt-12 '><button className="btn btn-active mt-4 border-none px-16" style={{backgroundColor:"#3282AD"}}>Discover More</button></div>


<div>
<IslandStays></IslandStays>
</div>
<div>
    <Contact></Contact>
</div>
<div>
<About></About>
</div>
        </div>
    );
};

export default Packages;