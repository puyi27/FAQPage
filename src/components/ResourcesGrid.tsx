import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const materials = [
  {
    title: "Corporate Governance",
    desc: "Download official ESG reports, balance sheets, and EGM listing documents.",
    icon: <AccountBalanceIcon fontSize="large" className="text-primary mb-3" />,
    link: "https://fae.technology/investor-relations"
  },
  {
    title: "Electronics Documentation",
    desc: "Technical datasheets, IoT integration guides, and firmware APIs.",
    icon: <DataObjectIcon fontSize="large" className="text-primary mb-3" />,
    link: "https://fae.technology/electronics"
  },
  {
    title: "Space Division Specs",
    desc: "Quality assurance standards and engineering specs for Kayser Space modules.",
    icon: <SatelliteAltIcon fontSize="large" className="text-primary mb-3" />,
    link: "https://fae.technology/space"
  },
  {
    title: "Press Kit & Brand Assets",
    desc: "High-resolution logos, brand guidelines, and official press releases.",
    icon: <DescriptionIcon fontSize="large" className="text-primary mb-3" />,
    link: "https://fae.technology/news"
  }
];

const ResourcesGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Materials & Documentation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Access technical documentation, financial reports, and official corporate materials directly from our specialized hubs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map((res, index) => (
          <a href={res.link} target="_blank" rel="noreferrer" key={index} className="card bg-white rounded-none border border-[#e9ecef] shadow-sm hover:border-primary transition-all group">
            <div className="card-body p-8 items-start text-left">
              {res.icon}
              <h3 className="card-title text-xl text-[#1a1e21] mb-2">{res.title}</h3>
              <p className="text-[#6c757d] text-sm flex-grow mb-6">{res.desc}</p>
              <div className="card-actions mt-auto w-full">
                <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                  View Material &rarr;
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesGrid;
