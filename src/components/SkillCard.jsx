import { motion } from 'framer-motion';
export default function SkillCard({ skill }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-500 mr-3 text-xl">
          {skill.icon || <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>}
        </div>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      <ul className="space-y-2">
        {skill.items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}