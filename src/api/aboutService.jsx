import axios from "axios";

const aboutService = {
  getAboutUs: async (lang) => {
    try {
      console.log("-----------------"+lang);
      const response = await axios.get(
        `http://my.admin.wardil.org/api/about_us`,
        {
          headers: {
            "x-api-key": "zJ6Z", 
            'X-Locale': lang
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching About Us data:", error);
      throw error;
    }
  },
};

export default aboutService;
