"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "Teferi Memorial Hospital Website",
    description: "A comprehensive hospital website designed to enhance digital access to medical services with multilingual support, appointment booking, and an admin panel.",
    tech: ["Next.js", "Firebase", "Firestore", "Firebase Auth", "Cloudinary", "React"],
    features: [
      "Multilingual support (English/Amharic) with language toggle",
      "Appointment booking system with form submission to Firestore",
      "Doctor directory with search and detailed profiles",
      "Blog section for health articles with dynamic content management",
      "Admin panel for managing appointments, blog posts, and doctors",
      "WCAG compliant and mobile-responsive design"
    ],
    images: [
      "/teferi-memorial/teferi-1.jpg",
      "/teferi-memorial/teferi-2.jpg",
      "/teferi-memorial/teferi-3.jpg"
    ],
    isMobile: true,
    link: "https://teferi-memorials.vercel.app/"
  },
  {
    title: "Abyssinia Gebeya E-commerce",
    description:
      "The main e-commerce platform of Abyssinia Gebeya ecosystem, allowing users to browse and purchase products with a seamless shopping experience.",
    tech: ["Next.js", "Firebase", "Cloudinary", "Chapa", "Tailwind CSS"],
    features: [
      "User-friendly product browsing",
      "Secure payments via Chapa",
      "Real-time inventory management",
      "Advanced search and filtering",
      "Responsive design for all devices",
    ],
    images: [
      "/abyssinia-gebeya/E-commerce/ecomerce-1.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-2.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-3.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-4.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-5.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-6.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-7.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-8.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-9.jpg",
      "/abyssinia-gebeya/E-commerce/ecomerce-10.jpg",
    ],
    isMobile: true,
  },
  {
    title: "Abyssinia Gebeya Delivery App",
    description:
      "A mobile application for delivery partners to manage and fulfill orders efficiently with real-time tracking.",
    tech: ["React Native", "Expo", "Firebase", "Gebeta Maps"],
    features: [
      "Real-time order tracking",
      "Route optimization",
      "Delivery status updates",
      "Earnings management",
      "Offline support",
    ],
    images: [
      "/abyssinia-gebeya/E-commerce/delivery1.png",
      "/abyssinia-gebeya/E-commerce/delivery2.png",
      "/abyssinia-gebeya/E-commerce/delivery3.png",
    ],
    isMobile: true,
  },
  {
    title: "Abyssinia Gebeya Back Office",
    description:
      "Comprehensive admin dashboard for managing the entire Abyssinia Gebeya ecosystem, including orders, users, and analytics.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    features: [
      "Real-time analytics dashboard",
      "Order management system",
      "User management",
      "Inventory control",
      "Sales reporting",
    ],
    images: [
      "/abyssinia-gebeya/E-commerce/admin1.png",
      "/abyssinia-gebeya/E-commerce/admin2.png",
      "/abyssinia-gebeya/E-commerce/admin3.png",
    ],
    isMobile: false,
  },
  {
    title: "Online Learning Platform",
    description:
      "A comprehensive web-based platform using Next.js and Firebase for interactive course management and video-based learning.",
    tech: ["Next.js", "Firebase", "Cloudinary", "TypeScript", "Tailwind CSS"],
    features: [
      "Interactive video course delivery",
      "Real-time progress tracking",
      "User authentication and authorization",
      "Course content management system",
      "Responsive video player integration",
    ],
    images: ["/learning-platform.svg"],
    isMobile: false,
  },
  {
    title: "Dating Application",
    description:
      "A modern dating platform with separate mobile app and admin dashboard interfaces, featuring real-time chat and smart matching.",
    tech: ["React Native", "Firebase", "Cloudinary", "Next.js"],
    features: [
      "User profile management",
      "Real-time chat and matching",
      "Admin dashboard for moderation",
      "Cloud-based media storage",
      "Advanced matching algorithms",
    ],
    images: ["/dating-app.svg"],
    isMobile: true,
  },
  {
    title: "Blog Post System",
    description:
      "A feature-rich blogging platform built with modern web technologies, supporting rich media content and real-time updates.",
    tech: ["Next.js", "Firebase", "Cloudinary"],
    features: [
      "Dynamic content management",
      "Real-time updates",
      "Image optimization",
      "Responsive design",
      "SEO optimization",
    ],
    images: ["/blog-system.svg"],
    isMobile: false,
  },
];

const MobileFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto w-[300px] h-[600px] md:w-[350px] md:h-[700px]">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-black rounded-t-[3rem] flex items-center px-6">
          <div className="flex-1 flex justify-between items-center">
            <span className="text-white text-xs">9:41</span>
            <div className="flex items-center space-x-2">
              <FaMobileAlt className="text-white w-3 h-3" />
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl flex items-center justify-center">
          <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-2" />
            <div className="w-12 h-1 bg-gray-800 rounded-full" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />

        {/* Screen */}
        <div className="absolute top-2 right-2 bottom-2 left-2 bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = ({
  images,
  isMobile,
}: {
  images: string[];
  isMobile: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const ImageContainer = isMobile ? MobileFrame : "div";

  return (
    <div className="relative group">
      <ImageContainer>
        <div
          className={`relative ${
            isMobile ? "h-full w-full" : "h-[300px] rounded-xl"
          } overflow-hidden`}
        >
          <Image
            src={images[currentIndex]}
            alt="Project screenshot"
            fill
            className={`object-${
              isMobile ? "contain" : "cover"
            } transition-all duration-500`}
            priority
          />

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={previousImage}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors transform hover:scale-110"
              aria-label="Previous image"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors transform hover:scale-110"
              aria-label="Next image"
            >
              <FaArrowRight size={20} />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </ImageContainer>
    </div>
  );
};

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
    <div className="py-12 px-4 sm:px-6 lg:px-8">
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

                    {project.link && (
                      <div className="pt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                          View Project
                          <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {project.images && project.images.length > 0 ? (
                  <ImageCarousel
                    images={project.images}
                    isMobile={project.isMobile}
                  />
                ) : (
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/abyssinia-gebeya.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
