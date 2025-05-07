export default function ProjectCard({ project }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <a href={project.githubLink} className="text-blue-600 hover:underline">
            View on GitHub
          </a>
        </div>
      </div>
    )
  }