import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 px-4 text-center bg-[#1a1e21] border-b border-[#282930]">
      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight uppercase">
          Engineering & Support Center
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-14 font-light">
          Technical knowledge base for electronic development, prototyping, IoT, and supply chain.
        </p>
        
        <div className="bg-white rounded-none p-2 flex items-center max-w-3xl mx-auto border border-transparent focus-within:border-[#0d6efd] focus-within:ring-2 focus-within:ring-[#0d6efd] transition-all">
          <SearchIcon className="text-gray-400 ml-4 mr-3" fontSize="large" />
          <input 
            type="text" 
            placeholder="Search technical articles, PCBA guides, or documentation..." 
            className="bg-transparent border-none outline-none text-[#282930] flex-1 py-4 px-2 placeholder-gray-400 text-lg font-medium"
          />
          <button className="bg-[#0d6efd] text-white rounded-none px-12 py-4 font-bold uppercase tracking-widest hover:bg-[#0a58ca] transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
