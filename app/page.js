"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    console.log("City Name:", cityName); // Debugging log
    e.preventDefault();
    if (cityName) {
      router.push(`/city/${cityName}`);
    }
  };

  return (
    <div>
      <h1>Welcome to MagicBricks Real Estate Listings</h1>
      <p>Find the best real estate projects in your city.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
