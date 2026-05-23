import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const ref = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: 'Sistem Sarpras',
      description: 'A school facility and infrastructure management system. Handles asset tracking, maintenance requests, and administrative reporting.',
      stack: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Parking App',
      description: 'A smart parking management application with real-time slot monitoring and vehicle entry/exit logging.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'CareBand',
      description: 'A wearable-integrated health monitoring app that tracks vitals and sends alerts to caregivers in real time.',
      stack: ['Flutter', 'Firebase', 'IoT', 'REST API'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Customize Hyprland',
      description: 'A curated Hyprland rice / dotfiles configuration for Arch Linux — featuring custom waybar, themes, and keybindings.',
      stack: ['Shell', 'Hyprland', 'Linux', 'Waybar'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 5,
      title: 'IVWA',
      description: 'A personal security learning project — a deliberately vulnerable web app for practicing OWASP Top 10 exploits.',
      stack: ['PHP', 'MySQL', 'HTML/CSS', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-reveal py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Label */}
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
        // projects
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
        What I've Built
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="scroll-reveal scroll-reveal-stagger bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 hover:bg-white/[0.05] hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(107,159,255,0.15)] transition-all group"
            style={{
              '--stagger-delay': `${index * 100}ms`,
            }}
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-white/[0.05] border border-white/10 text-white/60 px-2 py-1 rounded-full hover:border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                title="Live Demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
