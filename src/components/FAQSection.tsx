import React, { useState, useMemo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { faqData } from '../data/faqData';

interface AccordionItemProps {
  category?: string;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ category, q, a, isOpen, onToggle, id }) => (
  <div className="border-b border-gray-300 overflow-hidden bg-white">
    <button 
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-content-${id}`}
      id={`faq-header-${id}`}
      className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
    >
      <div>
        {category && <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{category}</span>}
        <span className={`font-bold text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-faeCyan' : 'text-faeDark'}`}>
          {q}
        </span>
      </div>
      <div className={`transform transition-transform duration-300 flex-shrink-0 text-faeDark ${isOpen ? 'rotate-90 text-faeCyan' : ''}`}>
        {isOpen ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />}
      </div>
    </button>
    <div 
      id={`faq-content-${id}`}
      role="region"
      aria-labelledby={`faq-header-${id}`}
      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="px-4 pb-8 text-gray-600 text-lg leading-relaxed pt-2">
        {a}
      </div>
    </div>
  </div>
);

interface FAQSectionProps {
  searchTerm: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ searchTerm }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openItem, setOpenItem] = useState<string | number | null>(0);

  const toggleAccordion = (id: string | number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const isSearching = searchTerm.trim().length > 0;
  
  const filteredFAQs = useMemo(() => {
    if (!isSearching) return [];
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    const flatFAQs = faqData.flatMap(cat => 
      cat.items.map((item, idx) => ({ ...item, category: cat.category, originalIndex: `${cat.category}-${idx}` }))
    );
    
    return flatFAQs.filter(item => 
      item.q.toLowerCase().includes(lowerSearchTerm) || 
      item.a.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, isSearching]);

  if (isSearching && filteredFAQs.length === 0) return null;

  return (
    <section id="faq-section" className="bg-white py-24 px-4 border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-faeDark uppercase tracking-widest mb-12 text-center">
          {isSearching ? 'Search Results in Knowledge Base' : 'Knowledge Base'}
        </h2>
        
        {!isSearching && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-4">
            {faqData.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setOpenItem(0); // Reset accordion when changing tabs
                }}
                className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-colors border-b-2 ${
                  activeTab === index 
                    ? 'border-faeCyan text-faeDark' 
                    : 'border-transparent text-gray-400 hover:text-faeDark'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        )}

        {/* Tab Content (Accordion) */}
        <div className="animate-fade-in-up" key={isSearching ? 'search' : activeTab}>
          <div className="flex flex-col border-t border-gray-300">
            {isSearching ? (
              // SEARCH VIEW
              filteredFAQs.map((item) => (
                <AccordionItem
                  key={item.originalIndex}
                  id={`search-${item.originalIndex}`}
                  category={item.category}
                  q={item.q}
                  a={item.a}
                  isOpen={openItem === item.originalIndex}
                  onToggle={() => toggleAccordion(item.originalIndex)}
                />
              ))
            ) : (
              // TABS VIEW
              faqData[activeTab].items.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  id={`tab-${activeTab}-${itemIndex}`}
                  q={item.q}
                  a={item.a}
                  isOpen={openItem === itemIndex}
                  onToggle={() => toggleAccordion(itemIndex)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
