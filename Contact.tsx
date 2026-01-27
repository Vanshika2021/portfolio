
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('success');
    // In a real app, you'd send this to a service like Formspree, Netlify Forms, or your own API
    console.log('Form Submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-indigo-500 text-xs font-black tracking-[0.4em] uppercase mb-4"
          >
            Communication
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-white tracking-tight"
          >
            Get in <span className="text-indigo-500 italic">Touch</span>
          </motion.h2>
          <p className="mt-4 text-slate-500 font-light">Have a role or a project in mind? I'd love to hear from you.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[500px] p-10 md:p-16 rounded-[3rem] bg-slate-900/40 backdrop-blur-2xl border border-white/5 shadow-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {formStatus !== 'success' ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Name"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your opportunity..."
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  disabled={formStatus === 'submitting'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3 ${
                    formStatus === 'submitting' 
                    ? 'bg-indigo-500/50 text-white cursor-not-allowed' 
                    : 'bg-white text-slate-950 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Signal...
                    </>
                  ) : 'Broadcast Message'}
                </motion.button>
                <p className="text-center text-[9px] text-slate-600 font-bold uppercase tracking-widest">
                  Direct reach: <a href="mailto:agrawalvanshika021@gmail.com" className="text-indigo-400 hover:underline">agrawalvanshika021@gmail.com</a>
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6 py-10"
              >
                <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                  <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-10 h-10 text-indigo-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Transmission Successful</h3>
                <p className="text-slate-400 max-w-sm font-light">
                  Thanks for reaching out, {formData.name.split(' ')[0]}! Your message has been received. I'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-xs font-black text-indigo-400 uppercase tracking-widest hover:text-white transition-colors pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
