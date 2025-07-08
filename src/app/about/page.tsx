export default function About() {
  return (
    <div className="min-h-screen">
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Aspiring Computer Science Professional
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl hover:shadow-2xl transition-all duration-300">
              <p className="text-lg mb-6">
                Hello! I'm Yichilal Sileshi Mekonen, a passionate Computer
                Science student with a strong foundation in technology and
                problem-solving. Currently pursuing my degree at Woldia
                University, I'm set to graduate in 2025 with a promising CGPA of
                3.42.
              </p>

              <p className="text-lg mb-6">
                My journey in computer science is driven by a deep curiosity for
                technology and its potential to shape the future. I've
                consistently demonstrated academic excellence, as shown by my
                successful completion of the exit exam with an impressive score
                of 80%.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <p>
                  Focusing on modern web technologies and software development
                  practices to create efficient solutions.
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Problem Solving</h3>
                </div>
                <p>
                  Applying analytical thinking and creative solutions to complex
                  technical challenges.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Looking Forward
              </h2>
              <p className="text-lg">
                As a developer I approach my graduation in 2025, I'm excited about the
                opportunities to apply my knowledge and skills in real-world
                scenarios. I'm particularly interested in [your specific
                interests in computer science] and looking forward to
                contributing to innovative projects that push the boundaries of
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
