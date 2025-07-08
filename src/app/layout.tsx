import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yichilal Sileshi - Portfolio",
  description:
    "Computer Science student and developer, passionate about modern web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                  <nav className="flex items-center space-x-8">
                    <a
                      href="/"
                      className="text-lg font-semibold hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      YS
                    </a>
                    <div className="hidden md:flex space-x-6">
                      <a
                        href="/about"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        About
                      </a>
                      <a
                        href="/projects"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Projects
                      </a>
                      <a
                        href="/education"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Education
                      </a>
                      <a
                        href="/experience"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Experience
                      </a>
                      <a
                        href="/skills"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Skills
                      </a>
                      <a
                        href="/contact"
                        className="hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Contact
                      </a>
                    </div>
                  </nav>
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main>{children}</main>

            <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Yichilal Sileshi. All rights
                    reserved.
                  </p>
                  <div className="flex space-x-6">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
