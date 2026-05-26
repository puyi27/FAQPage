import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface HeroProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const Hero: React.FC<HeroProps> = ({ searchTerm, onSearch }) => {
  const handleTopicClick = (term: string) => {
    onSearch(term);
    setTimeout(() => {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 100);
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-32 px-4 text-center bg-[#282930] border-b border-[#282930]">
      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
          Support. <span className="font-medium text-[#42C5FF]">At the technology frontier.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-14 font-light">
          Technical knowledge base for electronic development, prototyping, IoT, and supply chain.
        </p>
        
        <div className="bg-white rounded-none p-2 flex items-center max-w-3xl mx-auto border border-transparent focus-within:border-[#42C5FF] focus-within:ring-2 focus-within:ring-[#42C5FF] transition-all">
          <SearchIcon className="text-gray-400 ml-4 mr-3" fontSize="large" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearchClick(); }}
            placeholder="Search technical articles, PCBA guides, or documentation..." 
            className="bg-transparent border-none outline-none text-[#282930] flex-1 py-4 px-2 placeholder-gray-400 text-lg font-medium"
          />
          <button 
            onClick={handleSearchClick}
            className="bg-[#282930] text-white rounded-none px-12 py-4 font-bold uppercase tracking-widest hover:bg-[#1d1d23] transition-colors"
          >
            Search
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <span className="text-gray-400 font-medium mr-2 self-center uppercase tracking-widest text-xs">Popular Topics:</span>
          <button onClick={() => handleTopicClick('IPC-A-610')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">IPC-A-610 Standards</button>
          <button onClick={() => handleTopicClick('LoRaWAN')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">LoRaWAN</button>
          <button onClick={() => handleTopicClick('Conformal')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">Conformal Coating</button>
          <button onClick={() => handleTopicClick('OTA')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">OTA Updates</button>
          <button onClick={() => handleTopicClick('RoHS')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">RoHS / REACH</button>
          <button onClick={() => handleTopicClick('Supply Chain')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">Lead Times</button>
          <button onClick={() => handleTopicClick('EMC')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">EMC Compliance</button>
          <button onClick={() => handleTopicClick('RMA')} className="bg-[#36373E] hover:bg-[#42C5FF] text-white px-4 py-2 rounded-full transition-colors border border-transparent hover:border-[#42C5FF]">RMA Procedure</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
