import SkillCard from '../components/SkillCard.jsx';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const skills = [
  { name: 'Programming Languages', items: ['Python', 'Java', 'JavaScript', 'C++'], icon: <FaCode /> },
  { name: 'Web Development', items: ['React', 'Node.js', 'HTML/CSS', 'Express'], icon: <FaLaptopCode /> },
  { name: 'Data Science', items: ['Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'] },
  { name: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">About Me</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <FaGraduationCap className="mr-3" /> Education
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Auburn University at Montgomery</h3>
            <p className="text-gray-600">Master of Science in Computer Science</p>
            <p className="text-gray-500">2022 - 2024</p>
            <p className="mt-3">Relevant coursework: Advanced Algorithms, Machine Learning, Database Systems, Web Development</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}