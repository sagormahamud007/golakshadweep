import React from 'react';
import bannerImg from "../../Asstes/Banner--img/Layer 1 1.png"
import vector from "../../Asstes/Vector/Vector.png"
import img from "../../Asstes/Banner--img/Rectangle 9 (1).png"
import img2 from "../../Asstes/Banner--img/Rectangle 9.png"
import "./Banner.css"
import ShowFilghts from '../ShowFilghts/ShowFilghts';
import Packages from '../Packages/Packages';


const Banner = () => {
    return (
        <div className='max-h-screen overlayImg relative top-0'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='mapOverlay'>
        <img src={bannerImg} className="max-w-sm bannerImg shadow-2xl rounded-full" />
        
        <div className='relative -mt-28 mr-10 flex mapOverlay'>
            <div className=''>
                <img className='bg-white w-40 bannerImg' src={img2}></img>
                <div className="bg-white w-40">
                    <h1 className="font-bold text-sm ml-2">Explore Labuan Bajo</h1>
                    <p className=" text-xs ml-2">NTT, Indonesua</p>
                </div>
            </div>
            <div className='-mt-28 ml-40 lg:block md:hidden sm:hidden bannerImg'>
            <img className='bg-white w-32' src={img}></img>
                <div className="bg-white w-24">
                    <h1 style={{fontSize:"8px",fontWeight:"700",marginLeft:"6px"}}>Explore Labuan Bajo</h1>
                    <p style={{fontSize:"8px",marginLeft:"6px"}}>NTT, Indonesua</p>
                </div>
            </div>
        </div>
        </div>
    <div>
        <button className='mb-12 px-10 py-2 rounded-full bg-sky-100 inline-block'>Visit</button>
        
      <h1 className="text-5xl font-bold mb-3"> <span style={{color:"#3A3A3A"}}>The Exotic</span>
      </h1>
    <h1 className="text-5xl font-bold mb-3">
        <span style={{color:"#3282AD"}}>Lakshadweep </span> <br></br>
    </h1>
    <h1 className="text-5xl font-bold">
        <span style={{color:"#3A3A3A"}}>Islands</span> <br></br>
    </h1>

    <button  className="btn btn-outline btn-accent mt-5 px-12" >Success</button>

      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
<div>
    <ShowFilghts></ShowFilghts>
</div>
<div>
<Packages></Packages>
</div>
        </div>
    );
};

export default Banner;