export default function ProjectCard({ project }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">{project.name}</h2>
      <p className="text-gray-600">{project.location}</p>
      <p className="text-gray-800 font-bold">{project.priceRange}</p>
      <p className="text-sm text-gray-500">Builder: {project.builder}</p>
    </div>
  );
}
