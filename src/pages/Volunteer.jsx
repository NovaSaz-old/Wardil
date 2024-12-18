import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string(),
  gender: Yup.string().required("Gender is required"),
  occupation: Yup.string().required("Occupation is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  educationalQualification: Yup.string().required(
    "Educational Qualification is required"
  ),
  employmentStatus: Yup.string().required("Employment Status is required"),
  departments: Yup.array().min(1, "At least one department is required"),
  languages: Yup.array().min(1, "At least one language is required"),
  cv: Yup.mixed()
  .required("CV is required")
  .test("fileType", "Only image files are accepted", (value) => {
    return value && ["image/jpeg", "image/png"].includes(value.type);
  }),
  picture: Yup.mixed().required("Picture is required"),
});

const MyForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    const formData = new FormData();
    formData.append("full_name", values.fullName);
        formData.append("email", values.email);
    formData.append("address", values.address);
    formData.append("gender", values.gender);
    formData.append("occupation", values.occupation);
    formData.append("date_of_birth", values.dateOfBirth);
    formData.append("phone_number", values.phoneNumber);
    formData.append("educational_qualification", values.educationalQualification);
    formData.append("employment_status", values.employmentStatus);
  
    values.departments.forEach((department) => {
      formData.append("departments[]", department);
    });
    
    values.languages.forEach((language) => {
      formData.append("languages[]", language);
    });
    
    formData.append("cv_path", values.cv);
    formData.append("picture_path", values.picture);

  // Send a POST request to the server
    try {
      const response = await axios.post(
        "http://my.admin.wardil.org/api/volunteer/register",
        formData,
        {
          headers: {
            "x-api-key": "zJ6Z",
          },
        }
      );
  
      if (response.data.success) {
        alert(response.data.message);
        resetForm();
      } else {
        // Display specific validation errors
        setErrors(response.data.errors);
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto max-w-2xl p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        Registration Form
      </h2>
      <p className="mb-4 text-gray-500">
        Please complete all fields unless otherwise indicated.
      </p>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          address: "",
          gender: "",
          occupation: "",
          dateOfBirth: "",
          phoneNumber: "",
          educationalQualification: "",
          employmentStatus: "",
          departments: [],
          languages: [],
          cv: null,
          picture: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          touched,
          errors,
          isValid,
          setFieldValue,
          isSubmitting,
          values,
        }) => (
          <Form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Full Name</label>
              <Field
                name="fullName"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.fullName && !errors.fullName
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.email && !errors.email
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Address */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Address</label>
              <Field
                name="address"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.address && !errors.address
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Gender</label>
              <Field
                as="select"
                name="gender"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.gender && !errors.gender
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Occupation */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Occupation</label>
              <Field
                name="occupation"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.occupation && !errors.occupation
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="occupation"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Date of Birth */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Date of Birth</label>
              <Field
                type="date"
                name="dateOfBirth"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.dateOfBirth && !errors.dateOfBirth
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label className="text-gray-700 mb-1">Phone Number</label>
              <Field
                name="phoneNumber"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.phoneNumber && !errors.phoneNumber
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Educational Qualification */}
            <div className="relative">
              <label className="text-gray-700 mb-1">
                Educational Qualification
              </label>
              <Field
                as="select"
                name="educationalQualification"
                className={`p-2 border w-full rounded-md focus:outline-none ${
                  touched.educationalQualification &&
                  !errors.educationalQualification
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select Qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Ph.D.">Ph.D.</option>
              </Field>
              <ErrorMessage
                name="educationalQualification"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Employment Status */}
            <div>
              <label className="text-gray-700 mb-1">Employment Status</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="employmentStatus"
                    value="Employed"
                    className="mr-2"
                  />
                  Employed
                </label>
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="employmentStatus"
                    value="Unemployed"
                    className="mr-2"
                  />
                  Unemployed
                </label>
              </div>
              <ErrorMessage
                name="employmentStatus"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Departments */}
            <div>
              <label className="text-gray-700 mb-1">Departments</label>
              <div className="flex flex-wrap">
                {[
                  "HR",
                  "IT",
                  "Finance",
                  "Camps",
                  "Planning and Program",
                  "Supply Chain",
                  "Public Relationships and Media",
                  "Monitoring and Evaluation",
                ].map((department) => (
                  <label key={department} className="flex items-center mr-4">
                    <Field
                      type="checkbox"
                      name="departments"
                      value={department}
                      className="mr-2"
                    />
                    {department}
                  </label>
                ))}
              </div>
              <ErrorMessage
                name="departments"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Languages */}
            <div>
              <label className="text-gray-700 mb-1">Languages</label>
              <div className="flex flex-wrap">
                {["Arabic", "English", "Kurdish"].map((language) => (
                  <label key={language} className="flex items-center mr-4">
                    <Field
                      type="checkbox"
                      name="languages"
                      value={language}
                      className="mr-2"
                    />
                    {language}
                  </label>
                ))}
              </div>
              <ErrorMessage
                name="languages"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* CV Upload */}

            <div>
              <label className="text-gray-700 mb-1">Upload CV</label>

              <input
  type="file"
  name="cv"
  accept="image/*"
  onChange={(event) => {
    setFieldValue("cv", event.currentTarget.files[0]);
  }}
  className="w-full"
/>

          
              {values.cv && (
                <p className="text-sm text-green-500 mt-1">
                  Selected file: {values.cv.name}
                </p>
              )}
              <ErrorMessage
                name="cv"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Picture Upload */}
            <div>
              <label className="text-gray-700 mb-1">Upload Picture</label>
              <input
                type="file"
                name="picture"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("picture", event.currentTarget.files[0]);
                }}
                className="w-full"
              />
              {values.picture && (
                <p className="text-sm text-green-500 mt-1">
                  Selected file: {values.picture.name}
                </p>
              )}
              <ErrorMessage
                name="picture"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${
                isValid && !isSubmitting
                  ? "hover:bg-blue-700"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
