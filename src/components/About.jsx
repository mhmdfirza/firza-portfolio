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

      <div className="grid md:grid-cols-1 gap-12 md:gap-16">
        <div>
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
            Image
          </p>
        </div>
        {/* Text */}
        <div>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            I'm a Full Stack Developer passionate about building clean, scalable web applications
            and systems. With expertise across frontend and backend technologies, I focus on
            crafting elegant solutions to real-world problems. I believe in writing maintainable
            code and creating tools that make a difference.
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
