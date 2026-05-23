import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const ref = useScrollReveal();

  const contacts = [
    {
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/yourprofile',
      href: 'https://github.com/yourprofile',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-reveal py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center"
    >
      {/* Section Label */}
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
        // contact
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
        Let's Connect
      </h2>

      {/* Intro Text */}
      <p className="text-lg text-white/60 mb-16 leading-relaxed">
        Open to collaborations, projects, and opportunities.
      </p>

      {/* Contact Links */}
      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-reveal scroll-reveal-stagger block group"
            style={{
              '--stagger-delay': `${index * 150}ms`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 pb-4 border-b border-white/10 group-hover:border-accent/40 transition-colors">
              <span className="text-sm text-white/50 group-hover:text-accent transition-colors">
                {contact.label}
              </span>
              <span className="text-lg font-medium text-white group-hover:text-accent transition-colors">
                {contact.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
