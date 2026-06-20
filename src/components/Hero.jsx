import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax Blob */}
      <div
        className="parallax-blob"
        style={{
          transform: `translate(-50%, calc(-50% + ${scrollY}px))`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Name */}
        <h1
          className={`text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          Muhammad Firzatullah Aqila Risfayadi
        </h1>

        {/* Role */}
        <p
          className={`text-lg md:text-xl text-white/50 font-light tracking-wide transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          Software Developer | Web Developer | Software & Cybersecurity Enthusiast | Software Engineer Student | Fullstack Developer & Tech Enthusiast
        </p>
        <button className="mt-6 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-white transition-colors">Contact Me</button>
      </div>
    </section>
  );
};

export default Hero;
