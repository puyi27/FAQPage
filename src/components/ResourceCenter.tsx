import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

interface ResourceCenterProps {
  searchTerm: string;
}

const ResourceCenter: React.FC<ResourceCenterProps> = ({ searchTerm }) => {
  const allResources = [
    { 
      title: "IATF 16949 Certification", 
      type: "PDF", 
      size: "2.4 MB",
      desc: "Official automotive quality management system certificate. Required for Tier 1 and Tier 2 electronics suppliers."
    },
    { 
      title: "ISO 9001:2015 Certification", 
      type: "PDF", 
      size: "1.1 MB",
      desc: "Standard documentation demonstrating our commitment to consistent quality and regulatory compliance."
    },
    { 
      title: "RoHS 3 Compliance Declaration", 
      type: "PDF", 
      size: "650 KB",
      desc: "Legal declaration confirming that our manufacturing processes are free of hazardous substances (Pb, Hg, Cd, etc)."
    },
    { 
      title: "Edge IoT Gateway Reference Manual", 
      type: "PDF", 
      size: "8.4 MB",
      desc: "Deep technical dive into the i.MX8 gateway architecture, pinouts, thermal limits, and power management."
    },
    { 
      title: "LoRaWAN TR-103 Integration Guide", 
      type: "DOCX", 
      size: "4.2 MB",
      desc: "Step-by-step implementation guide for connecting embedded LoRa modules to The Things Network (TTN)."
    },
    { 
      title: "Gateway 3D CAD Models", 
      type: "STEP", 
      size: "24.5 MB",
      desc: "Full 3D STEP files for our industrial enclosures, useful for mechanical integration and clearance checks."
    },
    { 
      title: "AWS IoT Zero-Touch Provisioning", 
      type: "ZIP", 
      size: "1.5 MB",
      desc: "Python scripts and X.509 certificate generation tools for automated fleet onboarding to AWS IoT Core."
    },
    { 
      title: "RMA Request Form (2025)", 
      type: "PDF", 
      size: "850 KB",
      desc: "Standard Return Merchandise Authorization form. Must be filled and attached to any warranty return shipment."
    },
    { 
      title: "Design for Manufacturing (DFM) Guide", 
      type: "PDF", 
      size: "5.6 MB",
      desc: "Guidelines for trace widths, via sizes, and component clearances to ensure maximum PCBA yield."
    },
    { 
      title: "Linux Yocto BSP Source", 
      type: "TAR.GZ", 
      size: "145 MB",
      desc: "Board Support Package for custom Linux kernel compilation on NXP i.MX8 MPU architectures."
    }
  ];

  const resources = searchTerm 
    ? allResources.filter(res => 
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        res.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allResources;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {resources.map((res, i) => (
            <a 
              key={i} 
              href={`#download-${i}`}
              onClick={(e) => { e.preventDefault(); handleDownload(res.title); }}
              className="flex items-start justify-between p-6 border border-gray-200 hover:border-[#42C5FF] hover:bg-gray-50 transition-all group cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-5">
                <div className="bg-gray-100 p-4 text-[#282930] group-hover:text-[#42C5FF] group-hover:bg-white transition-colors mt-1">
                  <DescriptionOutlinedIcon fontSize="large" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#282930] group-hover:text-[#42C5FF] transition-colors mb-2">
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
              <div className="text-gray-300 group-hover:text-[#42C5FF] transition-colors mt-1 bg-white p-2 rounded-full shadow-sm group-hover:shadow border border-transparent group-hover:border-[#42C5FF]">
                <DownloadIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;
