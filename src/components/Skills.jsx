import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const ref = useScrollReveal();

  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Laravel', 'PHP', 'Python', 'REST API'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Linux', 'Bash', 'Figma', 'VS Code'],
    },
    {
      category: 'Security',
      skills: ['OWASP Top 10', 'Burp Suite', 'Penetration Testing'],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-reveal py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Label */}
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
        // skills
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
        Tech Stack
      </h2>

      {/* Skill Groups */}
      <div className="space-y-10">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            className=""
            style={{
              '--stagger-delay': `${groupIndex * 150}ms`,
            }}
          >
            {/* Category Label */}
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-4">
              {group.category}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-white/5 border border-white/10 text-white/70 hover:border-accent/40 hover:text-accent px-4 py-2 rounded-full text-sm transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
