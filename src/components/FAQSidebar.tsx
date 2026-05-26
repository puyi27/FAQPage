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

const FAQSidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start w-full">
      <div className="w-full md:w-1/4 bg-white border border-gray-200 shadow-sm p-4 sticky top-24">
        <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-6 border-b border-gray-200 pb-3">Technical Categories</h3>
        <ul className="flex flex-col gap-2">
          {faqData.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => { setActiveTab(index); setOpenItem(0); }}
                className={`w-full text-left px-4 py-3 font-semibold text-sm transition-colors rounded-none border-l-2 ${
                  activeTab === index 
                    ? 'border-[#0d6efd] bg-gray-50 text-[#0d6efd]' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category.category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-3/4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pb-4 border-b border-gray-200">
          {faqData[activeTab].category}
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqData[activeTab].items.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div key={index} className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-lg text-gray-900 pr-8">{item.q}</span>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 text-[#0d6efd] ${isOpen ? 'rotate-90 text-gray-900' : ''}`}>
                    {isOpen ? <CloseIcon /> : <AddIcon />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSidebar;
