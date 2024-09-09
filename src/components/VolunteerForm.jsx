import { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    gender: "",
    dateOfBirth: "",
    occupation: "",
    phoneNumber: "",
    educationalQualification: "",
    currentlyEmployed: "",
    relevantExperience: "",
    department: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="educationalQualification"
              className="block text-sm font-medium text-gray-700"
            >
              Educational Qualification
            </label>
            <select
              id="educationalQualification"
              name="educationalQualification"
              value={formData.educationalQualification}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select Educational Qualification</option>
              {/* Add options for educational qualifications here */}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="relevantExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Relevant Experience
            </label>
            <textarea
              id="relevantExperience"
              name="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="currentlyEmployed"
              className="block text-sm font-medium text-gray-700"
            >
              Are you currently employed?
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="currentlyEmployedYes"
                name="currentlyEmployed"
                value="Yes"
                checked={formData.currentlyEmployed === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="currentlyEmployedYes" className="ml-3">
                Yes
              </label>
              <input
                type="radio"
                id="currentlyEmployedNo"
                name="currentlyEmployed"
                value="No"
                checked={formData.currentlyEmployed === "No"}
                onChange={handleChange}
              />
              <label htmlFor="currentlyEmployedNo" className="ml-3">
                No
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select Department</option>
              {/* Add options for departments here */}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700"
            >
              Language You Know
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="languageKurdish"
                name="language"
                value="Kurdish"
                checked={formData.language.includes("Kurdish")}
                onChange={handleChange}
              />
              <label htmlFor="languageKurdish" className="ml-3">
                Kurdish
              </label>
              <input
                type="checkbox"
                id="languageEnglish"
                name="language"
                value="English"
                checked={formData.language.includes("English")}
                onChange={handleChange}
              />
              <label htmlFor="languageEnglish" className="ml-3">
                English
              </label>
              <input
                type="checkbox"
                id="languageArabic"
                name="language"
                value="Arabic"
                checked={formData.language.includes("Arabic")}
                onChange={handleChange}
              />
              <label htmlFor="languageArabic" className="ml-3">
                Arabic
              </label>
              <input
                type="checkbox"
                id="languageOthers"
                name="language"
                value="Others"
                checked={formData.language.includes("Others")}
                onChange={handleChange}
              />
              <label htmlFor="languageOthers" className="ml-3">
                Others
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
