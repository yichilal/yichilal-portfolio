export default function Education() {
  const education = [
    {
      id: 1,

      level: "University Education",
      institution: "Woldia University",
      location: "Woldia, Ethiopia",
      duration: "2021 - 2025",
      description: "Bachelor of Science in Computer Science",
      achievements: [
        "Current CGPA: 3.42",
        "Exit Exam Score: 80%",
        "Specializing in Computer Science",
        "Active participant in technology-related university projects",
      ],
    },
    {
      id: 2,
      level: "Preparatory Education",
      institution: "Damot Preparatory School",
      location: "Ethiopia",
      duration: "Grade 11-12",
      description: "Higher Secondary Education",
      achievements: [
        "University Entrance Exam Score: 502/700",
        "Strong foundation in science and mathematics",
        "Participated in academic competitions",
      ],
    },
    {
      id: 3,
      level: "Secondary Education",
      institution: "Damot Secondary School",
      location: "Ethiopia",
      duration: "Grade 9-10",
      description: "Secondary Education",
      achievements: [
        "National Exam Grade: 3.4/4.0",
        "Excellence in academic performance",
        "Active participation in school activities",
      ],
    },
    {
      id: 4,
      level: "Primary Education",
      institution: "Bata Primary School",
      location: "Ethiopia",
      duration: "Grade 8",
      description: "Primary Education",
      achievements: [
        "Exit Exam Score: 67/80 (83.54%)",
        "Strong academic foundation",
        "Demonstrated early academic excellence",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "January 2024",
      credentialLink: "#",
    },
    // Add more certifications here
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Educational Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Building a Strong Foundation in Computer Science
            </p>
          </div>

          {/* Academic Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  } md:w-1/2`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2" />

                  <div className="ml-8 md:ml-0">
                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                          {edu.level}
                        </h3>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.duration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.location}
                        </p>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                          Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-20 p-8 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Future Academic Goals
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As I progress towards my graduation in 2025, I'm focused on
              maintaining my strong academic performance and exploring advanced
              topics in computer science. My goal is to graduate with
              distinction and pursue opportunities that allow me to apply my
              knowledge in innovative ways.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="card">
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Issued by {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      {cert.date}
                    </span>
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Credential →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Education */}
          <div className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am committed to continuous learning and regularly participate in
              online courses, workshops, and tech conferences to stay updated
              with the latest technologies and best practices in software
              development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Some platforms I use for learning include: Coursera, Udemy, and
              freeCodeCamp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
