export default function ProjectCard({ project }) {
  return (
    <div className="glass rounded-xl overflow-hidden border border-gray-800 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 transition duration-300">
      {/* 🔝 IMAGE / BANNER */}
      <div className="h-40 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
        {project.name}
      </div>

      {/* 📄 CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-400/20 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-5">
          {/* LIVE */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-blue-500 rounded-lg hover:scale-105 transition text-sm"
          >
            Live
          </a>

          {/* GITHUB */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 border border-gray-600 rounded-lg hover:border-blue-400 transition text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
