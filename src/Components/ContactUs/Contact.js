import React from 'react';

const Contact = () => {
    return (
        <div className='py-8 px-6 flex justify-between flex-col md:flex-row items-center mt-24 mb-24' style={{backgroundColor:"#42A7C3"}}>
            <div className='-mt-1 md:mb-10'>
            <p className='text-3xl text-white' >Let’s Ready to Explore The  <br/>
            World With Us.</p>
            <p className='mt-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> 
            Pellentesque efficitur ac quam in congue. </p>
            </div>
        <div>
         <button className='py-2 px-16  bg-white text-black rounded-lg'>Contact Us</button>
         </div>
        </div>
    );
};

export default Contact;