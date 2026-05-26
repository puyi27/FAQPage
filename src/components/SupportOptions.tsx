import React from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const SupportOptions: React.FC = () => {
  const options = [
    {
      title: "Knowledge Base & FAQs",
      desc: "Answers to technical questions on PCBA, IoT, and supply chain.",
      icon: <ArticleOutlinedIcon fontSize="inherit" className="text-[#42C5FF] mb-4" />,
      link: "#faq-section"
    },
    {
      title: "Technical Documentation",
      desc: "Datasheets, API manuals, and quality certifications.",
      icon: <FolderZipOutlinedIcon fontSize="inherit" className="text-[#42C5FF] mb-4" />,
      link: "#resource-center"
    },
    {
      title: "RMA & Warranty",
      desc: "Return Merchandise Authorization procedures and warranty claims.",
      icon: <BuildCircleOutlinedIcon fontSize="inherit" className="text-[#42C5FF] mb-4" />,
      link: "#contact-hub"
    },
    {
      title: "Engineering Support",
      desc: "Direct line to our R&D specialists at the Kilometro Rosso Lab.",
      icon: <SupportAgentOutlinedIcon fontSize="inherit" className="text-[#42C5FF] mb-4" />,
      link: "#contact-hub"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, i) => (
            <a 
              key={i} 
              href={opt.link}
              className="bg-white border border-gray-200 p-8 flex flex-col items-start hover:border-[#42C5FF] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl">{opt.icon}</div>
              <h3 className="text-xl font-bold text-[#282930] mb-3 group-hover:text-[#42C5FF] transition-colors">{opt.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{opt.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
