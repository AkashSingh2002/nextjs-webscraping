"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "../../../components/ProjectCard";
import Map from "../../../components/Map";
import { use } from "react"; // Import use for unwrapping params

export default function CityPage({ params }) {
  const { cityName } = use(params); // Unwrap params
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`/api/scrape?city=${cityName}`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, [cityName]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Real Estate Projects in {cityName}</h1>
      
      {loading ? <div>Loading...</div> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}

      <div className="mt-8">
        <Map projects={projects} />
      </div>
    </div>
  );
}
