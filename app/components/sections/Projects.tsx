"use client";
import dynamic from "next/dynamic";
import projects from "../../../data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

// Lazy-load ProjectCard
const ProjectCard = dynamic(() => import("../../projects/ProjectCard"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl" />
  ),
});

export default function Projects() {
  const featuredProjects = Object.values(projects)
    .filter((p) => p.featured)
    .slice(0, 3);
  const totalProjects = Object.values(projects).length;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Simplified animation for better performance */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
            CASE STUDIES
          </div>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Projects that define my work.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some real-world case studies where I&apos;ve applied automation, AI, and full-stack development to solve meaningful problems.
          </p>
        </motion.div>

        {/* Project Grid - Optimized animations for better UX */}
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              role="listitem"
              aria-label={`Project: ${project.title}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {project.featured && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-md z-10">
                  Featured
                </span>
              )}
              <ProjectCard project={project} />
            </motion.article>
          ))}
        </div>

        {/* CTA Section - Purposeful animation that guides user action */}
        <motion.div
          className="mt-16 text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              View All {totalProjects} Projects
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>
          </motion.div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Or{" "}
            <Link
              href="/resume"
              className="underline font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              download my resume
            </Link>{" "}
            for a quick overview.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
