import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-28 px-4 text-center bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1a1e21 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Engineering & Support Center
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-14">
          Technical knowledge base for electronic development, prototyping, IoT, and supply chain.
        </p>
        
        <div className="bg-white rounded-none p-3 flex items-center max-w-3xl mx-auto shadow-md border border-gray-300 focus-within:border-[#0d6efd] focus-within:ring-1 focus-within:ring-[#0d6efd] transition-all">
          <SearchIcon className="text-gray-400 ml-4 mr-3" fontSize="large" />
          <input 
            type="text" 
            placeholder="Search technical articles, PCBA guides, or documentation..." 
            className="bg-transparent border-none outline-none text-gray-900 flex-1 py-3 px-2 placeholder-gray-400 text-lg"
          />
          <button className="bg-[#0d6efd] text-white rounded-none px-10 py-3 font-bold uppercase tracking-widest hover:bg-[#0a58ca] transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
