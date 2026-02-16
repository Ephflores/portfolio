import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Github } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import { Card, CardContent } from '../ui/card';

const ContactModal = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ephraim-flores',
      href: personalInfo.linkedin,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className={`inline-flex p-4 bg-gradient-to-br ${method.gradient} bg-opacity-10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-cyan-400">
                  {method.icon}
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">{method.label}</h4>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm break-all"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-400 text-sm">{method.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          <Send size={24} />
          Send Me an Email
        </a>
      </div>
    </div>
  );
};

export default ContactModal;