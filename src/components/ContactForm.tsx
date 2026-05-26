import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent to FAE Technology.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto mt-24 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 bg-[#f8f9fa] border border-[#e9ecef] p-8 rounded-none flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#1a1e21] mb-2">Still need help?</h3>
            <p className="text-[#6c757d] text-sm">Reach out directly to our headquarters or specialized divisions.</p>
          </div>
          
          <div className="flex gap-4 items-start">
            <LocationOnIcon className="text-primary mt-1" />
            <div>
              <strong className="block text-[#1a1e21] mb-1">Headquarters</strong>
              <p className="text-sm text-[#6c757d]">Via C. Battisti, 136<br/>24025 - Gazzaniga (BG) - Italia</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <PhoneIcon className="text-primary mt-1" />
            <div>
              <strong className="block text-[#1a1e21] mb-1">Phone</strong>
              <p className="text-sm text-[#6c757d]">+39 035 73 81 30</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <EmailIcon className="text-primary mt-1" />
            <div>
              <strong className="block text-[#1a1e21] mb-1">Email (PEC)</strong>
              <p className="text-sm text-[#6c757d]">faetechnology@legalmail.it</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white border border-[#e9ecef] p-8 rounded-none flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label font-bold text-[#1a1e21] text-xs uppercase tracking-widest">Full Name</label>
              <input 
                type="text" name="name" value={formData.name} onChange={handleChange} required 
                placeholder="Mario Rossi"
                className="input input-bordered w-full rounded-none bg-white border-[#e9ecef] focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-[#1a1e21] text-xs uppercase tracking-widest">Email Address</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange} required 
                placeholder="mario.rossi@company.com"
                className="input input-bordered w-full rounded-none bg-white border-[#e9ecef] focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label font-bold text-[#1a1e21] text-xs uppercase tracking-widest">Inquiry Subject</label>
            <select name="subject" value={formData.subject} onChange={handleChange} required className="select select-bordered w-full rounded-none bg-white border-[#e9ecef] focus:border-primary focus:ring-1 focus:ring-primary transition-all">
              <option value="" disabled>Select a department...</option>
              <option value="electronics">Electronics Division</option>
              <option value="space">Space Division (Kayser)</option>
              <option value="investors">Investor Relations</option>
              <option value="careers">Careers & HR</option>
              <option value="other">General Support</option>
            </select>
          </div>
          
          <div className="form-control w-full">
            <label className="label font-bold text-[#1a1e21] text-xs uppercase tracking-widest">Message</label>
            <textarea 
              name="message" value={formData.message} onChange={handleChange} required rows={5}
              placeholder="How can we assist you?"
              className="textarea textarea-bordered w-full rounded-none bg-white border-[#e9ecef] focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary rounded-none font-bold uppercase tracking-wider w-full md:w-auto md:self-end px-10">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
