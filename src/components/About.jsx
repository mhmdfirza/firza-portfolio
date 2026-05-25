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

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {/* Image */}
        <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover object-top filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all rounded-xl"
          />
        </div>
        {/* Text */}       
        <div>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Software Engineering student with a background as Student Council President — accustomed to leading teams, strategizing, and delivering under pressure. I build data-driven, secure, and user-focused applications across the full stack, from web systems to security tooling and embedded integrations. Currently deepening expertise in Machine Learning, Computer Networking, and Modern Frameworks while contributing to real-world projects and open-source tooling.
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
