import React, { useState, useEffect } from "react";
import hero2sm from "../assets/images/hero2sm.png";
import BlueBottomBanner from "../components/BlueBottomBanner";
import VideoBanner from "../components/VideoBanner";
import aboutService from "../api/aboutService";
import { getCookie } from "../components/utils/helpers"; 

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState(getCookie("lang") || "en_US"); 

  useEffect(() => {
    console.log("Fetching About Us with language from cookie:", language);
    const fetchAboutUs = async () => {
      setLoading(true);
      try {
        const response = await aboutService.getAboutUs(language); 
        
        console.log("About Us response:", response);
        if (response && response.data) {
          setAboutData(response);
        } else {
          console.warn("Invalid About Us response:", response);
          setError("Failed to load About Us content.");
        }
      } catch (err) {
        console.error("Error fetching About Us data:", err.response || err.message);
        setError("An error occurred while fetching About Us data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUs();
  }, [language]);

  return (
    <div>
      <img className="w-full h-auto" src={hero2sm} alt="hero" />

      <div className="flex justify-center p-8 text-center md:p-28 2xl:text-left">
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-lg text-red-500">{error}</p>
        ) : aboutData?.data ? (
          <div className="grid grid-cols-1 place-items-center gap-6 2xl:grid-cols-3">
            <div className="col-span-2">
              <p className="mb-1 mt-4 text-lg font-semibold text-blue-700">About Us</p>
              <h3 className="mt-4 text-lg md:mt-4 lg:text-2xl xl:mt-8 xl:text-3xl">
                {aboutData.data.about_us}
              </h3>
            </div>
            <div className="flex place-items-center justify-center text-center 2xl:ml-auto">
              <img
                src={`http://my.admin.wardil.org/storage/${aboutData.data.about_us_image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt="About Us"
                className="max-w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-500">No data available.</p>
        )}
      </div>
      <VideoBanner />
      <BlueBottomBanner />
    </div>
  );
}
