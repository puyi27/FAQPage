import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-white text-[#282930] py-24 px-4 border-t border-gray-200 mt-12">
      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-[#282930]">
          Do you require personalized technical engineering assistance?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          Our R&D team and manufacturing specialists are available to analyze the hardware, connectivity, and industrial scalability requirements of your project.
        </p>
        <a 
          href="https://fae.technology/contact-us" 
          className="inline-flex items-center justify-center bg-[#0d6efd] hover:bg-[#0a58ca] text-white px-12 py-5 font-bold uppercase tracking-widest transition-colors rounded-none text-lg"
        >
          Contact the Engineering Team <ArrowForwardIcon className="ml-4" fontSize="medium" />
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
