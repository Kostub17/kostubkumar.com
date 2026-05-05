import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle2, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: `Subject: ${formData.subject}\n\n${formData.message}`,
        }),
        });
        const data = await res.json();
        if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
        setStatus('error');
        }
    } catch (err) {
        setStatus('error');
    }
    };

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Feel free to reach out for project inquiries, collaborations, or just to say hello!
        </motion.p>

        

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border text-white rounded-lg focus:outline-none transition-all ${
                        focusedField === 'name' ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-neutral-700'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-neutral-800 border text-white rounded-lg focus:outline-none transition-all ${
                        focusedField === 'email' ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-neutral-700'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-neutral-800 border text-white rounded-lg focus:outline-none transition-all ${
                      focusedField === 'subject' ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-neutral-700'
                    }`}
                    placeholder="Project Collaboration"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-neutral-800 border text-white rounded-lg focus:outline-none resize-none transition-all ${
                      focusedField === 'message' ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-neutral-700'
                    }`}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-emerald-400 rounded-full"></div>
                Contact Information
              </h2>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-900 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-lg border border-emerald-800">
                    <Mail className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a
                      href="mailto:kostubk@gmail.com"
                      className="text-neutral-400 hover:text-emerald-400 transition-colors"
                    >
                      kostubk@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-900 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-br from-cyan-950 to-cyan-900 rounded-lg border border-cyan-800">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a
                      href="tel:+14436661624"
                      className="text-neutral-400 hover:text-cyan-400 transition-colors"
                    >
                      +1 (443) 666-1624
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-900 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-lg border border-emerald-800">
                    <MapPin className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-neutral-400">
                      Boston, MA + Garnet Valley, PA
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-emerald-400 rounded-full"></div>
                Connect With Me
              </h2>
              <div className="space-y-3">
                <motion.a
                  href="https://github.com/Kostub17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500 transition-all"
                >
                  <Github className="text-neutral-400" size={24} />
                  <span className="text-white">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kostubkumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-neutral-600 transition-all"
                >
                  <Linkedin className="text-neutral-400" size={24} />
                  <span className="text-white">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com/kostub_kumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-neutral-600 transition-all"
                >
                  <Instagram className="text-neutral-400" size={24} />
                  <span className="text-white">Instagram</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
