"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCloudinary,
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "Abyssinia Gebeya Ecosystem",
    description:
      "A comprehensive marketplace system consisting of three integrated applications: delivery app, e-commerce platform, and back office management system.",
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "Cloudinary",
      "Chapa",
      "Gebeta Maps",
      "Next.js",
      "Tailwind AI",
    ],
    features: [
      "Real-time delivery tracking with Gebeta Maps",
      "Secure payments via Chapa integration",
      "Centralized back office for data management",
      "Cloud-based image storage with Cloudinary",
      "Seamless user experience across all platforms",
    ],
    image: "/abyssinia-gebeya.svg",
  },
  {
    title: "Online Learning Platform",
    description:
      "A web-based platform using Next.js and Firebase for comprehensive course management and video-based learning.",
    tech: ["Next.js", "Firebase", "Cloudinary", "TypeScript", "Tailwind CSS"],
    features: [
      "Interactive video course delivery",
      "Real-time progress tracking",
      "User authentication and authorization",
      "Course content management system",
      "Responsive video player integration",
    ],
    image: "/learning-platform.svg",
  },
  {
    title: "Dating Application",
    description:
      "A modern dating platform with separate mobile app and admin dashboard interfaces.",
    tech: ["React Native", "Firebase", "Cloudinary", "Next.js"],
    features: [
      "User profile management",
      "Real-time chat and matching",
      "Admin dashboard for moderation",
      "Cloud-based media storage",
      "Advanced matching algorithms",
    ],
    image: "/dating-app.svg",
  },
  {
    title: "Blog Post System",
    description:
      "A feature-rich blogging platform built with modern web technologies.",
    tech: ["Next.js", "Firebase", "Cloudinary"],
    features: [
      "Dynamic content management",
      "Real-time updates",
      "Image optimization",
      "Responsive design",
      "SEO optimization",
    ],
    image: "/blog-system.svg",
  },
];

const TechIcon = ({ tech }: { tech: string }) => {
  const icons: { [key: string]: IconType } = {
    "React Native": FaReact,
    Firebase: SiFirebase,
    Cloudinary: SiCloudinary,
    Expo: SiExpo,
    "Next.js": SiNextdotjs,
    "Node.js": FaNodeJs,
    Tailwind: SiTailwindcss,
  };

  const Icon = icons[tech];
  if (!Icon) return null;

  return (
    <div className="text-gray-700 dark:text-gray-300">
      <Icon size={24} />
    </div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h1>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2"
                        >
                          <span className="mr-2">
                            <TechIcon tech={tech} />
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
