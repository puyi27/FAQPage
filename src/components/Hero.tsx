import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 text-center bg-[#1a1e21] border-b border-[#282930]">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
          Support & Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-14">
          Find answers about FAE Technology divisions, group companies, and our technological ecosystem.
        </p>
        
        <div className="bg-white rounded-none p-2 flex items-center max-w-2xl mx-auto shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-primary transition-all">
          <SearchIcon className="text-gray-400 ml-4 mr-2" />
          <input 
            type="text" 
            placeholder="Search our FAQ..." 
            className="bg-transparent border-none outline-none text-gray-800 flex-1 py-3 px-2 placeholder-gray-400"
          />
          <button className="btn btn-primary rounded-none px-8 ml-2 font-bold uppercase tracking-wider">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
