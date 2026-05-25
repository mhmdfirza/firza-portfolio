import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const ref = useScrollReveal();

  const experiences = [
    {
      id: 1,
      title: 'OSIS (Student Council)',
      role: 'Active Member & Leader',
      period: '2019 – 2024',
      description: 'Led organizational programs, coordinated school events, and managed cross-division teams of 30+ students.',
    },
    {
      id: 2,
      title: 'Leadership',
      role: 'Division Head / Committee Lead',
      period: '2020 – 2024',
      description: 'Held leadership positions in multiple school and campus committees, driving initiatives in tech and social programs.',
    },
    {
      id: 3,
      title: 'Volunteer',
      role: 'Tech Volunteer',
      period: '2021 – Present',
      description: 'Contributed to community events and programs as a technical volunteer, assisting in digital infrastructure and documentation.',
    },
    {
      id: 4,
      title: 'Competition',
      role: 'Competitor',
      period: '2022 – 2024',
      description: 'Participated in programming, cybersecurity, and design competitions at regional and national levels.',
    },
    {
      id: 5,
      title: 'Achievement',
      role: 'Recognized Excellence',
      period: '2023 – 2024',
      description: 'Recognized for academic excellence and technical achievements across multiple academic years.',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-reveal py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      {/* Section Label */}
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
        // experience
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
        Journey
      </h2>

      {/* Timeline */}
      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0 md:-translate-x-1/2" />

        {/* Timeline items */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`scroll-revealr elative pl-12 md:pl-0 ${
              index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-1/2'
            }`}
            // style={{
            //   '--stagger-delay': `${index * 100}ms`,
            // }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-4 h-4 bg-accent rounded-full border-4 border-black/80 md:left-1/2 md:-translate-x-1/2 md:top-2" />

            {/* Content */}
            <div className={`md:${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-accent mb-2">{exp.role}</p>
              <p className="text-xs text-white/40 mb-3">{exp.period}</p>
              <p className="text-sm text-white/60 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
