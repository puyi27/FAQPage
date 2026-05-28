import React, { useMemo } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { allResources } from '../data/resourceData';

interface ResourceCenterProps {
  searchTerm: string;
}

const ResourceCenter: React.FC<ResourceCenterProps> = ({ searchTerm }) => {
  const resources = useMemo(() => {
    if (!searchTerm.trim()) return allResources;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allResources.filter(res => 
      res.title.toLowerCase().includes(lowerSearchTerm) || 
      res.desc.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  if (searchTerm && resources.length === 0) return null;

  const handleDownload = (title: string) => {
    // Simulated download action
    alert(`Initiating secure download for: ${title}\n(Simulated action for demo purposes)`);
  };

  return (
    <section id="resource-center" className="bg-white py-24 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-faeDark uppercase tracking-widest mb-4">
              {searchTerm ? 'Matching Resources' : 'Technical Resources'}
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl">
              {searchTerm ? `Found ${resources.length} documents matching your search.` : 'Download official certifications, product datasheets, integration guides, and forms.'}
            </p>
          </div>
          {!searchTerm && (
            <button className="mt-6 md:mt-0 border-2 border-faeDark text-faeDark font-bold uppercase tracking-widest px-8 py-3 hover:bg-faeDark hover:text-white transition-colors">
              View All Documents
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {resources.map((res, i) => (
            <button 
              key={i} 
              onClick={() => handleDownload(res.title)}
              className="w-full flex items-start justify-between p-6 border border-gray-200 hover:border-faeCyan hover:bg-gray-50 transition-all group cursor-pointer shadow-sm hover:shadow-md text-left focus:outline-none focus:ring-2 focus:ring-faeCyan"
            >
              <div className="flex items-start gap-5">
                <div className="bg-gray-100 p-4 text-faeDark group-hover:text-faeCyan group-hover:bg-white transition-colors mt-1">
                  <DescriptionOutlinedIcon fontSize="large" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-faeDark group-hover:text-faeCyan transition-colors mb-2">
                    {res.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed pr-4">
                    {res.desc}
                  </p>
                  <span className="inline-block bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-200">
                    {res.type} • {res.size}
                  </span>
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-faeCyan transition-colors mt-1 bg-white p-2 rounded-full shadow-sm group-hover:shadow border border-transparent group-hover:border-faeCyan">
                <DownloadIcon />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
