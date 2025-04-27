
const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Solutions Brasil",
    location: "São Paulo, Brazil",
    period: "January 2022 – Present",
    achievements: [
      "Led the implementation of a robust infrastructure as code (IaC) strategy using Terraform and AWS, reducing manual intervention and deployment time by 40%.",
      "Designed and maintained scalable Kubernetes clusters to run microservices, resulting in 99.9% uptime for production systems.",
      "Managed CI/CD pipelines using Jenkins and GitLab CI, optimizing build times and enhancing developer productivity.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "GlobalTech Solutions",
    location: "Remote (Brazil)",
    period: "August 2018 – December 2021",
    achievements: [
      "Spearheaded migration of on-premise infrastructure to AWS, improving system performance by 30% and cutting operational costs by 25%.",
      "Managed multi-region, multi-account AWS infrastructure, including VPCs, EC2 instances, RDS databases, and S3 storage.",
      "Developed automated deployment pipelines using Jenkins, enabling faster software delivery and reducing deployment errors.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="relative pl-8 border-l-2 border-[#8B5CF6]"
            >
              <div className="absolute w-4 h-4 bg-[#8B5CF6] rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-bold text-[#1A1F2C]">{exp.title}</h3>
              <p className="text-[#8B5CF6] font-semibold">{exp.company}</p>
              <p className="text-gray-600 mb-4">
                {exp.location} | {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
