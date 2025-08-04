export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineering Intern",
      company: "Addis Ababa Transport Bureau",
      location: "Addis Ababa, Ethiopia",
      duration: "3 months",
      description:
        "Developed and implemented a comprehensive freight management system to streamline transportation operations for the Addis Ababa Transport Bureau.",
      responsibilities: [
        "Designed and developed a web-based freight management system using React.js",
        "Implemented backend services using Express.js and MySQL database",
        "Created RESTful APIs for seamless data communication",
        "Developed user authentication and authorization system",
        "Implemented real-time tracking and management features",
        "Collaborated with bureau officials to gather and implement requirements",
      ],
      technologies: [
        "React.js",
        "Express.js",
        "MySQL",
        "Node.js",
        "REST APIs",
        "JWT Authentication",
        "Bootstrap",
      ],
      achievements: [
        "Successfully delivered the system within the 3-month timeframe",
        "Improved freight tracking efficiency by implementing real-time updates",
        "Reduced manual paperwork by 60% through digitization",
        "Implemented a user-friendly interface that required minimal training",
      ],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="py-12">
          <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Experience Content */}
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
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
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Key Achievements:
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
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
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Additional Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Open Source Contributions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Actively contribute to various open-source projects, focusing
                  on improving documentation and implementing new features.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Freelance Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Working on various freelance projects, developing custom
                  solutions for clients across different industries using modern
                  web technologies.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
}
