import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <img 
            src="/profile.jpg" 
            alt="Bharath Kumar Polasa" 
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Bharath Kumar Polasa</h1>
          <h2 className="text-2xl text-blue-500 mb-6">Master's in Computer Science Graduate</h2>
          <p className="text-lg mb-8">
            Recent graduate from Auburn University at Montgomery with expertise in software development, 
            machine learning, and web technologies. Passionate about solving complex problems with elegant solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/yourusername" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="/resume.pdf" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition">
              <FaFilePdf size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}