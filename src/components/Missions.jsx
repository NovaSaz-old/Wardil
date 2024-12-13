import React, { useState, useEffect } from "react";
import axios from "axios";

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get(
          "http://my.admin.wardil.org/api/missions",
          {
            headers: {
              // Include the API key
              "x-api-key": "zJ6Z",
            },
          },
        );

        if (response.data.success) {
          setMissions(response.data.data); // Assuming `data` contains the missions list
        } else {
          throw new Error(response.data.message || "Failed to fetch missions");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            <h2>{mission.title}</h2>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
