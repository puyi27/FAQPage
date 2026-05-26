import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

interface ResourceCenterProps {
  searchTerm: string;
}

const ResourceCenter: React.FC<ResourceCenterProps> = ({ searchTerm }) => {
  const allResources = [
    { title: "IATF 16949 Certification (Automotive)", type: "PDF", size: "2.4 MB" },
    { title: "ISO 9001:2015 Quality Management", type: "PDF", size: "1.1 MB" },
    { title: "Edge IoT Gateway - Technical Datasheet", type: "PDF", size: "4.8 MB" },
    { title: "LoRaWAN Module Implementation Guide", type: "DOCX", size: "3.2 MB" },
    { title: "Standard RMA Request Form (2025)", type: "PDF", size: "850 KB" },
    { title: "AWS IoT Core Zero-Touch Provisioning", type: "ZIP", size: "12.5 MB" }
  ];

  const resources = searchTerm 
    ? allResources.filter(res => res.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : allResources;

  if (searchTerm && resources.length === 0) return null;

  return (
    <section id="resource-center" className="bg-white py-24 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-[#282930] uppercase tracking-widest mb-4">
              {searchTerm ? 'Matching Resources' : 'Technical Resources'}
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl">
              {searchTerm ? `Found ${resources.length} documents matching your search.` : 'Download official certifications, product datasheets, integration guides, and forms.'}
            </p>
          </div>
          {!searchTerm && (
            <button className="mt-6 md:mt-0 border-2 border-[#282930] text-[#282930] font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#282930] hover:text-white transition-colors">
              View All Documents
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {resources.map((res, i) => (
            <div key={i} className="flex items-center justify-between p-5 border border-gray-200 hover:border-[#42C5FF] hover:bg-gray-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 text-[#282930] group-hover:text-[#42C5FF] group-hover:bg-white transition-colors">
                  <DescriptionOutlinedIcon />
                </div>
                <div>
                  <h4 className="font-bold text-[#282930] group-hover:text-[#42C5FF] transition-colors">{res.title}</h4>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{res.type} • {res.size}</span>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-[#42C5FF] transition-colors">
                <DownloadIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
