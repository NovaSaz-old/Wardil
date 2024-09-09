import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CourseRegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        gender: "",
        address: "",
        phoneNumber: "",
        selectedCourses: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="mx-auto max-w-md p-4">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="mb-2 block font-bold text-gray-700"
            >
              Full Name
            </label>
            <Field
              type="text"
              name="fullName"
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="mt-1 text-red-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-1 text-red-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="mb-2 block font-bold text-gray-700"
            >
              Gender
            </label>
            <Field
              as="select"
              name="gender"
              className="block w-full rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="mt-1 text-red-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="mb-2 block font-bold text-gray-700"
            >
              Address
            </label>
            <Field
              type="text"
              name="address"
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="mb-2 block font-bold text-gray-700"
            >
              Phone Number
            </label>
            <Field
              type="text"
              name="phoneNumber"
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="mt-1 text-red-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="selectedCourses"
              className="mb-2 block font-bold text-gray-700"
            >
              Courses
            </label>
            <Field
              as="select"
              name="selectedCourses"
              className="block w-full rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
            >
              <option value="">Select Course</option>
              <option value="Male">1</option>
              <option value="Female">2</option>
              <option value="Other">3</option>
            </Field>
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseRegistrationForm;
