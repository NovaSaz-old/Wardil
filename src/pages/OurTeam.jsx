import React, { useState, useEffect } from "react";
import TitleSection from "../components/itleSection";
import hero2sm from "../assets/images/hero2sm.png";
import axios from "axios";
import { getCookie } from "../components/utils/helpers";
import Missions from "../components/Missions";

function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState(getCookie("lang") || "en_US");

  // Fetch team members from API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      console.log("Fetching team members with language from cookie:", language);
      try {
        const response = await axios.get(
          "http://my.admin.wardil.org/api/teams",
          {
            headers: {
              "x-api-key": "zJ6Z",
              "X-Locale": language,
            },
          },
        );
        setTeamMembers(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching team members:", err); // Debug
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch team members. Please try again later.";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, [language]);

  function VolunteerCard({ name, position, blood, phone, email, image }) {
    return (
      <div className="text-star container mx-auto mb-4 rounded-lg bg-white p-6 px-4 shadow-md">
        <img
          src={`http://my.admin.wardil.org/storage/${image}`}
          alt={name}
          className="mx-auto mb-4 h-24 w-24 rounded-full"
        />
        <h3 className="mb-2 text-center text-xl font-semibold">{name}</h3>
        <p className="mb-2 text-center text-gray-500">{position}</p>
        <div className="text-sm">
          <p>
            <strong>Blood:</strong> {blood}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <img src={hero2sm} alt="hero" />

      <TitleSection
        title="Welcome to Our Community"
        subtitle1="We are glad to have you here."
        subtitle2="Explore our latest updates"
      />

      {/* Volunteers Section */}
      <h2 className="mb-6 text-center text-3xl font-bold">Volunteers</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : teamMembers.length === 0 ? (
        <p className="text-center text-gray-500">No volunteers found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((volunteer) => (
            <VolunteerCard key={volunteer.id} {...volunteer} />
          ))}
        </div>
      )}
      <Missions />
    </div>
  );
}

export default OurTeam;
