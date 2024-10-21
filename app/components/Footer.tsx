import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex justify-center items-center hover:bg-white hover:bg-opacity-20 h-full">
          🏠
          </div>
          <div className="flex-1 flex justify-center items-center hover:bg-white hover:bg-opacity-20 h-full">
          🐦
          </div>
          <div className="flex-1 flex justify-center items-center hover:bg-white hover:bg-opacity-20 h-full">
          📘
          </div>
          <div className="flex-1 flex justify-center items-center hover:bg-white hover:bg-opacity-20 h-full">
            <button className="uppercase font-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;