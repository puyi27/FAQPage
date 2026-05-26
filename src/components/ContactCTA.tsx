import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact-hub" className="bg-[#282930] text-white py-24 px-4 relative overflow-hidden">
      {/* Subtle background pattern for industrial feel */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white uppercase">
            Specialized Support Hub
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Direct your inquiry to the appropriate department for accelerated resolution. Our specialized teams in Italy are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engineering Card */}
          <div className="bg-white text-[#282930] p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#42C5FF]">
            <SupportAgentOutlinedIcon fontSize="large" className="text-[#42C5FF] mb-6" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Engineering & R&D</h3>
            <p className="text-gray-600 font-light mb-8 flex-grow">
              Discuss DFM/DFX, IoT connectivity architectures, custom PCBA design, or arrange a visit to the Kilometro Rosso Hub.
            </p>
            <a 
              href="https://fae.technology/contact-us" 
              className="inline-flex items-center text-[#282930] font-bold uppercase tracking-widest hover:text-[#42C5FF] transition-colors"
            >
              Talk to an Engineer <ArrowForwardIcon className="ml-2" fontSize="small" />
            </a>
          </div>

          {/* Supply Chain Card */}
          <div className="bg-white text-[#282930] p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#42C5FF]">
            <LocalShippingOutlinedIcon fontSize="large" className="text-[#42C5FF] mb-6" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Supply Chain & RMA</h3>
            <p className="text-gray-600 font-light mb-8 flex-grow">
              Initiate a Return Merchandise Authorization (RMA), track production status, or discuss component procurement strategies.
            </p>
            <a 
              href="https://fae.technology/contact-us" 
              className="inline-flex items-center text-[#282930] font-bold uppercase tracking-widest hover:text-[#42C5FF] transition-colors"
            >
              Access Supply Portal <ArrowForwardIcon className="ml-2" fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
