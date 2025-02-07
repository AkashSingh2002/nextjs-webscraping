import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ projects }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-96 w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {projects.map((project, index) => (
        <Marker key={index} position={[project.latitude, project.longitude]}>
          <Popup>
            <strong>{project.name}</strong><br />
            {project.priceRange}<br />
            {project.builder}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
