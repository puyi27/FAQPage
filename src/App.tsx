import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResourcesGrid from './components/ResourcesGrid';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="py-24 px-4 bg-white">
          <ResourcesGrid />
          <div className="w-full h-px bg-gray-200 my-16 max-w-7xl mx-auto"></div>
          <FAQAccordion />
          <ContactForm />
        </section>
      </main>
      
      <footer className="footer py-20 px-10 bg-[#1a1e21] text-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-xl mb-4 text-[#42c5ff]">FAE Technology S.p.a.</h3>
            <p className="text-gray-400">Via C. Battisti, 136</p>
            <p className="text-gray-400">24025 - Gazzaniga (BG) - Italia</p>
            <p className="mt-4 text-gray-400">P.IVA 02032310167</p>
            <a href="mailto:info@fae.technology" className="link link-hover text-[#42c5ff] mt-2 block">info@fae.technology</a>
          </div> 
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Explore</h3>
            <a href="https://fae.technology/success-stories" className="link link-hover block mb-3 text-gray-400 hover:text-white">Success stories</a>
            <a href="https://fae.technology/leadership-and-governance" className="link link-hover block mb-3 text-gray-400 hover:text-white">Leadership & Governance</a>
            <a href="https://fae.technology/investor-relations" className="link link-hover block mb-3 text-gray-400 hover:text-white">Investor relations</a>
            <a href="https://fae.technology/news" className="link link-hover block mb-3 text-gray-400 hover:text-white">News</a>
            <a href="https://fae.technology/careers" className="link link-hover block mb-3 text-gray-400 hover:text-white">Careers</a>
            <a href="https://fae.technology/contact-us" className="link link-hover block text-gray-400 hover:text-white">Contact Us</a>
          </div> 
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Legal & Social</h3>
            <a href="https://www.iubenda.com/privacy-policy/29874489" className="link link-hover block mb-3 text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/29874489/cookie-policy" className="link link-hover block mb-6 text-gray-400 hover:text-white">Cookie Policy</a>
            <div className="flex gap-6">
              <a href="https://it.linkedin.com/company/faetechnology" className="link link-hover text-gray-400 hover:text-[#42c5ff] uppercase tracking-widest text-xs font-bold">LinkedIn</a>
              <a href="https://www.facebook.com/FaeTechnology/" className="link link-hover text-gray-400 hover:text-[#42c5ff] uppercase tracking-widest text-xs font-bold">Facebook</a>
              <a href="https://www.instagram.com/faetechnology/" className="link link-hover text-gray-400 hover:text-[#42c5ff] uppercase tracking-widest text-xs font-bold">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
