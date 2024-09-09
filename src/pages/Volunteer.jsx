import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),

  occupation: Yup.string().required("Occupation is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  educationalQualification: Yup.string().required(
    "Educational Qualification is required",
  ),
  employmentStatus: Yup.string().required("Employment Status is required"),
});

const MyForm = () => {
  return (
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
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form className="m-2 items-center justify-center rounded-lg bg-white p-4 shadow-md ss4:m-6 sm:m-20 sm:p-16 md:grid md:grid-cols-2">
          {/** First col */}
          <div>
            <div className="mb-4">
              <label htmlFor="fullName" className="">
                Full Name:
              </label>
              <Field
                type="text"
                name="fullName"
                className="block w-full rounded bg-slate-100 p-2 outline-none lg:w-80"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                className="block w-full rounded bg-slate-100 p-2 outline-none lg:w-80"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="">
                Address:
              </label>
              <Field
                type="text"
                name="address"
                className="block w-full rounded bg-slate-100 p-2 outline-none lg:w-80"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="">
                Gender:
              </label>
              <Field
                as="select"
                name="gender"
                className="block w-full rounded-lg bg-slate-100 p-2 text-center lg:w-80"
              >
                <option className="" value="">{``}</option>
                <option className="" value="Male">
                  Male
                </option>
                <option className="" value="Female">
                  Female
                </option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="occupation" className="">
                Occupation:
              </label>
              <Field
                type="text"
                name="occupation"
                className="block w-full rounded bg-slate-100 p-2 outline-none lg:w-80"
              />
              <ErrorMessage
                name="occupation"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="">
                Date of Birth:
              </label>
              <Field
                type="date"
                name="dateOfBirth"
                className="block w-full rounded-lg bg-slate-100 p-1 p-2 text-center lg:w-80"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="">
                Phone Number:
              </label>
              <Field
                type="text"
                name="phoneNumber"
                className="block w-full rounded bg-slate-100 p-2 outline-none lg:w-80"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
          </div>

          {/** Second col */}
          <div>
            <div className="mb-4">
              <label htmlFor="educationalQualification" className="">
                Educational Qualification:
              </label>
              <Field
                as="select"
                name="educationalQualification"
                className="block w-full rounded-lg bg-slate-100 p-2 text-center lg:w-80"
              >
                <option value="">Select</option>
                {/* Add options for educational qualifications here */}
              </Field>
              <ErrorMessage
                name="educationalQualification"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="employmentStatus" className="">
                Employment Status:
              </label>
              <div className="flex space-x-4">
                <Field
                  type="radio"
                  name="employmentStatus"
                  value="employed"
                  className="mr-2"
                />{" "}
                Employed
                <Field
                  type="radio"
                  name="employmentStatus"
                  value="unemployed"
                  className=""
                />{" "}
                Unemployed
              </div>
              <ErrorMessage
                name="employmentStatus"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <h2>Departments</h2>
            <Field
              name="departments"
              type="checkbox"
              value="HR"
              onChange={handleChange}
            />{" "}
            HR
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="IT"
              onChange={handleChange}
            />{" "}
            IT
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="Finance"
              onChange={handleChange}
            />{" "}
            Finance
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="Camps"
              onChange={handleChange}
            />{" "}
            Camps
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="Planning and Program"
              onChange={handleChange}
            />{" "}
            Planning and Program
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="Supply Chain"
              onChange={handleChange}
            />{" "}
            Supply Chain
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="Public Relationships and Media"
              onChange={handleChange}
            />{" "}
            Public Relationships and Media
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="Monitoring and Evaluation"
              onChange={handleChange}
            />{" "}
            Monitoring and Evaluation
            <br />
            <Field
              name="departments"
              type="checkbox"
              value="other"
              onChange={handleChange}
            />{" "}
            Other:{" "}
            <input
              type="text"
              name="departments[other]"
              value={
                values.departments.find((d) => d === "other")
                  ? values.departments
                      .find((d) => d === "other")
                      .replace("other", "")
                  : ""
              }
              onChange={handleChange}
            />
            <br />
            <h2 className="mt-4">Languages</h2>
            <Field
              name="languages"
              type="checkbox"
              value="Arabic"
              onChange={handleChange}
            />{" "}
            Arabic
            <br />
            <Field
              name="languages"
              type="checkbox"
              value="English"
              onChange={handleChange}
            />{" "}
            English
            <br />
            <Field
              name="languages"
              type="checkbox"
              value="Kurdish"
              onChange={handleChange}
            />{" "}
            Kurdish
            <br />
            <Field
              name="languages"
              type="checkbox"
              value="other"
              onChange={handleChange}
            />{" "}
            Other:{" "}
            <input
              type="text"
              name="languages[other]"
              value={
                values.languages.find((l) => l === "other")
                  ? values.languages
                      .find((l) => l === "other")
                      .replace("other", "")
                  : ""
              }
              onChange={handleChange}
            />
            <br />
            <label htmlFor="cv">Upload CV:</label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={(event) => {
                values.cv = event.target.files[0];
                handleChange({
                  target: { name: "cv", value: event.target.files[0] },
                });
              }}
            />
            <br />
            <label htmlFor="picture">Upload Picture:</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={(event) => {
                values.picture = event.target.files[0];
                handleChange({
                  target: { name: "picture", value: event.target.files[0] },
                });
              }}
            />
            <br />
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
