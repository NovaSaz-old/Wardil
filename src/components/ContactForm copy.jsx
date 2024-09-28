import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          address: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="mx-auto max-w-4xl rounded border p-4 shadow sm:p-20">
            <div className="grid gap-8 md:grid-cols-2">
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
                <ErrorMessage
                  name="address"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="message"
                className="mb-2 block font-bold text-gray-700"
              >
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                className="block h-64 w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <button
              type="submit"
              className="my-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-12 flex flex-col items-center justify-center lg:flex-row">
        {/** 1st card */}
        <div className="mx-auto my-8 h-48 w-72 rounded-lg bg-white p-8 shadow drop-shadow-sm">
          <h4 className="mx-2 mb-6 text-2xl font-medium">Number</h4>
          <div className="mt-3 flex">
            <FaPhone className="ml-2 mr-4 text-2xl" />
            <p className="my-auto text-lg">0751 111 7512</p>
          </div>
          <div className="mt-3 flex">
            <FaPhone className="ml-2 mr-4 text-2xl" />
            <p className="my-auto text-lg">0751 111 7512</p>
          </div>
        </div>
        {/** 2nd card */}
        <div className="mx-auto my-8 h-48 w-72 rounded-lg bg-white p-8 shadow drop-shadow-sm">
          <h4 className="mx-2 mb-6 text-2xl font-medium">Address</h4>
          <div className="mt-3 flex">
            <FaLocationDot className="ml-2 mr-4 text-2xl" />
            <p className="my-auto text-lg">Iraq, Duhok, Gere Base Area</p>
          </div>
        </div>
        {/** 3rd card */}
        <div className="mx-auto my-8 h-48 w-72 rounded-lg bg-white p-8 shadow drop-shadow-sm">
          <h4 className="mx-2 mb-6 text-2xl font-medium">Email</h4>
          <div className="mt-10 flex">
            <IoMdMail className="ml-2 mr-4 text-3xl" />
            <p className="my-auto text-lg">contact@wardill.org</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
