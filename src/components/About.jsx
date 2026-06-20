import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-reveal py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Label */}
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-12">
        // about
      </p>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Text */}
        <div>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            {/* Software Engineering student with a background as Student Council President — accustomed to leading teams, strategizing, and delivering under pressure. I build data-driven, secure, and user-focused applications across the full stack, from web systems to security tooling and embedded integrations. Currently deepening expertise in Machine Learning, Computer Networking, and Modern Frameworks while contributing to real-world projects and open-source tooling. */}
            I am a Junior Full Stack Web Based System Developer obviously specializing in web development with a strong interest in computer networks, and cybersecurity. Throughout my journey, I have gained valuable experience that enhanced both my technical and interpersonal skills — from joining various competitions and leadership programs to serving as the Student Council President for one year, and completing internships and professional training. I possess strong skills in web and software development, database management, and project coordination, with proficiency in Python, React, Laravel, PHP, JavaScript, MySQL and Arch Linux. I’m passionate about continuous learning, teamwork, and creating innovative digital solutions that make a real impact.
          </p>
        </div>

        {/* Terminal Block */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 font-mono text-sm">
          <div className="space-y-3 text-white/60">
            <div>
              <span className="text-accent">$</span> whoami
            </div>
            <div className="text-white/40">&gt; Muhammad Firzatullah Aqila Risfayadi</div>

            <div className="mt-6">
              <span className="text-accent">$</span> cat skills.txt
            </div>
            <div className="text-white/40 space-y-1">
              <p>&gt; React, TypeScript, Node.js, Laravel</p>
              <p>&gt; MySQL, MongoDB, Firebase</p>
              <p>&gt; Docker, Linux, REST APIs</p>
            </div>

            <div className="mt-6">
              <span className="text-accent">$</span> echo $FOCUS
            </div>
            <div className="text-accent">&gt; "building things that matter"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
