export default async function handler(req, res) {
    const { location } = req.query;
    const API_KEY = "YOUR_POSITIONSTACK_API_KEY";
  
    if (!location) {
      return res.status(400).json({ error: "Location is required." });
    }
  
    const url = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${encodeURIComponent(location)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { latitude, longitude } = data.data[0];
  
      res.status(200).json({ latitude, longitude });
    } catch (error) {
      res.status(500).json({ error: "Error fetching coordinates." });
    }
  }
  