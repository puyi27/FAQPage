import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const faqData = [
  {
    category: "Prototyping & PCBA",
    items: [
      {
        q: "What quality standards are applied in PCBA assembly for automotive?",
        a: "We strictly apply the IATF 16949 norm and IPC-A-610 Class 2 and 3 standards. Our process includes 3D Automated Optical Inspection (AOI), Automated X-Ray Inspection (AXI) for BGA components, and custom ICT/FCT testing based on design specifications."
      },
      {
        q: "What lead times do you offer for rapid PCBA prototypes?",
        a: "For the NPI (New Product Introduction) phase, we offer the Fast Track service. If critical components are available or supplied by the customer (Consigned), prototype assembly can be completed within 5 to 10 business days after clearing the DFM (Design for Manufacturing) review."
      },
      {
        q: "What co-design capabilities does the R&D team offer?",
        a: "Our team intervenes from the architectural conception. We perform thermal and signal feasibility analysis, BOM optimization for obsolescence mitigation, and redesign focused on DFX (Design for Excellence: Manufacturing, Assembly, Test)."
      }
    ]
  },
  {
    category: "IoT & Cloud Solutions",
    items: [
      {
        q: "Which wireless communication protocols do your embedded modules support?",
        a: "We develop agnostic solutions integrating BLE 5.x, Wi-Fi 6, LoRaWAN for long-range and low power, NB-IoT/LTE-M for cellular connectivity, and Matter for home automation, ensuring scalability in Edge and Cloud infrastructures."
      },
      {
        q: "How do you guarantee cybersecurity in the hardware-to-cloud ecosystem?",
        a: "We implement hardware security elements (Secure Elements / TPM), Secure Boot processes, end-to-end TLS 1.3 encryption, and X.509 certificate management integrated into Zero-Touch provisioning workflows with platforms like AWS IoT or Azure IoT Hub."
      }
    ]
  },
  {
    category: "FAE Technology HUB",
    items: [
      {
        q: "What testing infrastructure does the laboratory at Kilometro Rosso offer?",
        a: "The technological HUB features anechoic chambers for EMC/EMI pre-certification, climatic chambers for thermal stress testing (-40°C to +150°C), and vibration simulators to validate design reliability under industrial and IEC standards."
      },
      {
        q: "Is it possible to integrate our engineers into the HUB facilities?",
        a: "Yes, we operate under an open innovation model. We provide satellite laboratories and development islands where joint teams (client and FAE) can collaborate in situ for accelerated product maturation (Proof of Concept to MVP)."
      }
    ]
  },
  {
    category: "Supply Chain",
    items: [
      {
        q: "How do you manage the global shortage of electronic components?",
        a: "We have a supply chain intelligence system that monitors component lifecycles (Silicon Expert). We apply prospective purchasing strategies, second-source qualification, and strategic buffer stocks."
      },
      {
        q: "What levels of traceability do you offer in mass manufacturing?",
        a: "Our MES (Manufacturing Execution System) guarantees Level 4 unit traceability. We record the batch, date, and supplier of every component mounted on each PCBA serial number, essential for the aerospace and medical sectors."
      }
    ]
  }
];

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
  
  // If searching, flatten the FAQ data
  const flatFAQs = faqData.flatMap(cat => 
    cat.items.map((item, idx) => ({ ...item, category: cat.category, originalIndex: `${cat.category}-${idx}` }))
  );
  
  const filteredFAQs = flatFAQs.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isSearching && filteredFAQs.length === 0) return null;

  return (
    <section id="faq-section" className="bg-white py-24 px-4 border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#282930] uppercase tracking-widest mb-12 text-center">
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
                    ? 'border-[#42C5FF] text-[#282930]' 
                    : 'border-transparent text-gray-400 hover:text-[#282930]'
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
              filteredFAQs.map((item) => {
                const isOpen = openItem === item.originalIndex;
                return (
                  <div key={item.originalIndex} className="border-b border-gray-300 overflow-hidden bg-white">
                    <button 
                      onClick={() => toggleAccordion(item.originalIndex)}
                      className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                    >
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.category}</span>
                        <span className={`font-bold text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-[#42C5FF]' : 'text-[#282930]'}`}>
                          {item.q}
                        </span>
                      </div>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 text-[#282930] ${isOpen ? 'rotate-90 text-[#42C5FF]' : ''}`}>
                        {isOpen ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />}
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 text-gray-600 text-lg leading-relaxed pt-2">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // TABS VIEW
              faqData[activeTab].items.map((item, itemIndex) => {
                const isOpen = openItem === itemIndex;
                return (
                  <div key={itemIndex} className="border-b border-gray-300 overflow-hidden bg-white">
                    <button 
                      onClick={() => toggleAccordion(itemIndex)}
                      className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                    >
                      <span className={`font-bold text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-[#42C5FF]' : 'text-[#282930]'}`}>
                        {item.q}
                      </span>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 text-[#282930] ${isOpen ? 'rotate-90 text-[#42C5FF]' : ''}`}>
                        {isOpen ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />}
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-8 text-gray-600 text-lg leading-relaxed pt-2">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
