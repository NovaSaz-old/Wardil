import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  const formData = new FormData();

  // Append each field to the FormData object
  formData.append("name", values.fullName);
  formData.append("email", values.email);
  formData.append("phone", values.phoneNumber);
  formData.append("address", values.address);
  formData.append("gender", values.gender);
  formData.append("course_id", values.courseId);

  try {
    const response = await axios.post(
      "http://my.admin.wardil.org/api/course/register",
      formData,
      {
        headers: {
          // Ensure Axios handles the Content-Type automatically
          "x-api-key": "zJ6Z",
        },
      },
    );

    if (response.data.success) {
      alert(response.data.message);
      resetForm();
    } else {
      alert("Validation errors occurred.");
      console.error(response.data.errors);
    }
  } catch (error) {
    alert("An error occurred while submitting the form.");
    console.error(error);
  } finally {
    setSubmitting(false);
  }
};

const CourseRegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.number()
      .oneOf([0, 1], "Gender is required")
      .required("Gender is required"),
    address: Yup.string().required("Address is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    courseId: Yup.number().required("Course selection is required"),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        gender: "",
        address: "",
        phoneNumber: "",
        courseId: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md md:p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <Field
                type="text"
                name="fullName"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <Field
                type="text"
                name="address"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Field
                type="text"
                name="phoneNumber"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="courseId"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Courses
              </label>
              <Field
                as="select"
                name="courseId"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Course</option>
                <option value="1">Course 1</option>
                <option value="2">Course 2</option>
                <option value="3">Course 3</option>
              </Field>
              <ErrorMessage
                name="courseId"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseRegistrationForm;
