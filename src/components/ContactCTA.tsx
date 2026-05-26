import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-[#1a1e21] text-white py-20 px-4 border-t-4 border-[#0d6efd] mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          ¿Requiere asistencia técnica de ingeniería personalizada?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
          Nuestro equipo de I+D y especialistas en manufactura están disponibles para analizar los requisitos de hardware, conectividad y escalabilidad industrial de su proyecto.
        </p>
        <a 
          href="https://fae.technology/contact-us" 
          className="inline-flex items-center justify-center bg-[#0d6efd] hover:bg-[#0a58ca] text-white px-10 py-4 font-bold uppercase tracking-widest transition-colors rounded-none"
        >
          Contactar al Equipo de Ingeniería <ArrowForwardIcon className="ml-3" fontSize="small" />
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
