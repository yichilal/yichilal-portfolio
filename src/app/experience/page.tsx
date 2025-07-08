export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Tech Company Name",
      location: "City, Country",
      duration: "Jan 2023 - Present",
      description:
        "Working on full-stack development using modern technologies.",
      responsibilities: [
        "Developed and maintained multiple web applications using React and Node.js",
        "Implemented RESTful APIs and microservices architecture",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    },
    // Add more experiences here
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="card relative">
                {/* Timeline Dot */}
                <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Experience Content */}
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">{exp.role}</h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.duration}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Experience */}
          <div className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Additional Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Open Source Contributions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Actively contribute to various open-source projects, focusing
                  on improving documentation and implementing new features.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Freelance Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Worked on various freelance projects, developing custom
                  solutions for clients across different industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
