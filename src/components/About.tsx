
import { Mountain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Mountain className="w-8 h-8 text-[#8B5CF6]" />
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C]">
            About Me
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
          <p>
            Passionate about technology, automation, and building scalable,
            efficient systems, I am a Software Engineer with extensive experience in
            configuration management and infrastructure operations.
          </p>
          <p>
            With a strong background in DevOps practices and cloud-native
            technologies, I have successfully helped companies automate workflows,
            streamline processes, and reduce deployment times. I am proficient in a
            variety of tools such as Ansible, Docker, Kubernetes, Terraform, and
            AWS, and have worked extensively with CI/CD pipelines, container
            orchestration, and system monitoring.
          </p>
          <p>
            My goal is to continue evolving in the field of software engineering,
            bringing innovation to every challenge and delivering high-impact
            solutions that drive business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
