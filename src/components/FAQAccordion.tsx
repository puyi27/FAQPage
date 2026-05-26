import React from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import MemoryIcon from '@mui/icons-material/Memory';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const faqs = [
  {
    category: "Corporate & Group",
    icon: <BusinessIcon className="text-primary mr-3" />,
    questions: [
      { 
        q: "What is FAE Technology?", 
        a: "FAE Technology is an Italian industrial technology group listed on Euronext Growth Milan and a key player in advanced electronics and space technology solutions." 
      },
      { 
        q: "Which companies are part of the FAE Technology Group?", 
        a: "The group brings together industrial excellences including FAE technology, Elettronica GF, ipTronix, MAS Elettronica, and Kayser Space." 
      }
    ]
  },
  {
    category: "Divisions & Technology",
    icon: <MemoryIcon className="text-primary mr-3" />,
    questions: [
      { 
        q: "What are the main divisions of FAE Technology?", 
        a: "Our core divisions are Electronics (design, engineering, and manufacturing for advanced electronics) and Space (advanced space solutions via Kayser Space)." 
      },
      { 
        q: "What is your approach to innovation?", 
        a: "We support innovation across every industrial sector by designing, developing, and integrating technologies that make the future possible today, guided by speed, determination, and collaboration." 
      }
    ]
  },
  {
    category: "Locations & Contact",
    icon: <LocationOnIcon className="text-primary mr-3" />,
    questions: [
      { 
        q: "Where is the FAE Technology headquarters located?", 
        a: "Our headquarters is located at Via C. Battisti, 136, 24025 - Gazzaniga (BG) - Italia." 
      },
      { 
        q: "Do you have other technological hubs or plants?", 
        a: "Yes, we operate multiple facilities including the FAE Technology HUB and Big Tech at Kilometro Rosso (Bergamo), Plant Uno in Vertova, and a facility in Albino. Our group companies also have headquarters in Faenza, Roma, Rubano, and Livorno." 
      }
    ]
  }
];

const FAQAccordion: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      {faqs.map((group, groupIndex) => (
        <div key={groupIndex} className="animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-[#1a1e21] border-b-2 border-[#e9ecef] pb-3">
            {group.icon} {group.category}
          </h3>
          <div className="flex flex-col gap-2">
            {group.questions.map((faq, i) => (
              <div key={i} className="collapse collapse-arrow bg-white rounded-none border border-[#e9ecef]">
                <input type="radio" name={`accordion-${groupIndex}`} defaultChecked={i === 0} /> 
                <div className="collapse-title text-lg font-bold text-[#282930]">
                  {faq.q}
                </div>
                <div className="collapse-content"> 
                  <p className="text-[#6c757d] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
