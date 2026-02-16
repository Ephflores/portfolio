import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Github, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ephraim-flores',
      href: personalInfo.linkedin,
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 bg-gradient-to-br ${contact.color} bg-opacity-10 rounded-full text-cyan-400 group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  {contact.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Send size={24} />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;