import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16 scroll-mt-24"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src="/photo.jpeg"
            alt="profile"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Hi, I'm Prince
          </motion.h1>

          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-md mx-auto md:mx-0">
            Backend Developer building scalable APIs, cloud-ready systems, and
            real-world applications.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-5 mt-6 justify-center md:justify-start text-lg">
            {/* GitHub */}
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white-600 hover:text-blue-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white-600 hover:text-blue-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* View Projects */}
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:scale-105 transition text-center"
            >
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contactme"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:scale-105 hover:border-blue-600 text-center"
            >
              Contact Me
            </a>

            <a
              href="/Prince_Movaliya_Resume.pdf"
              download
              className="px-6 py-3 border border-gray-600 rounded-lg hover:scale-105 hover:border-blue-600 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
