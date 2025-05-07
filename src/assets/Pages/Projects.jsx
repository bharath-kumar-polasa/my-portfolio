import ProjectCard from '../components/ProjectCard.jsx';

const projects = [
  {
    title: "Machine Learning Model for Image Classification",
    description: "Developed a CNN model using TensorFlow to classify images with 95% accuracy.",
    technologies: ["Python", "TensorFlow", "Keras"],
    githubLink: "#"
  },
  {
    title: "E-commerce Website",
    description: "Full-stack e-commerce platform with user authentication and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    githubLink: "#"
  },
  {
    title: "Student Management System",
    description: "Database application for managing student records and course enrollments.",
    technologies: ["Java", "MySQL", "Swing"],
    githubLink: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Vite.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    githubLink: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}