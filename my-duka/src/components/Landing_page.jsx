import React from 'react';
import Landing from '../assets/img/Landing.jpg';

const Landing_page = () => {
  return (
    <div style={{
      height: '100vh', // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${Landing})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <p className="text-2xl text-white">MY DUKA</p>
      <div className="text-black font-black
       text-4xl mb-20">
        Your One Stop Shop for Everything you need
      </div>
      <div className="m-4 border-2 p-4 rounded-2xl align-middle">
        <button className="bg-green-700 text-white p-2 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Landing_page;
