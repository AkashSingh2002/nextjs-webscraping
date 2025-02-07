export default async function handler(req, res) {
    const { city } = req.query;
  
    if (!city) {
      return res.status(400).json({ error: "City name is required." });
    }
  
    const url = `https://www.magicbricks.com/new-projects-${city}`;
    // MOCK DATA (Replace with real scraping logic)
    const projects = [
      { name: "Skyline Towers", location: "Downtown", priceRange: "$100,000 - $200,000", builder: "Skyline Group", latitude: 17.385, longitude: 78.4867 },
      { name: "Green Valley", location: "Suburbs", priceRange: "$80,000 - $150,000", builder: "Eco Builders", latitude: 17.500, longitude: 78.5500 }
    ];
    
    res.status(200).json(projects);
  }
  