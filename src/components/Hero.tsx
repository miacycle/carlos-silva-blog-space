
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F2C] mb-4">
          Carlos Silva
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          Software Engineer | Configuration Management | Infrastructure Operations
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Based in São Paulo, Brazil 🇧🇷
        </p>
        <div className="space-x-4">
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-lg hover:bg-[#8B5CF6] hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
