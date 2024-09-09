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
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <Field type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="address">Address:</label>

            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <Field type="text" name="gender" />
            <ErrorMessage name="gender" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="occupation">Occupation:</label>
            <Field type="text" name="occupation" />
            <ErrorMessage name="occupation" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <Field type="date" name="dateOfBirth" />
            <ErrorMessage
              name="dateOfBirth"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="educationalQualification">
              Educational Qualification:
            </label>
            <Field as="select" name="educationalQualification">
              <option value="">Select</option>
              {/* Add options for educational qualifications here */}
            </Field>
            <ErrorMessage
              name="educationalQualification"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="employmentStatus">Employment Status:</label>
            <Field type="radio" name="employmentStatus" value="employed" />{" "}
            Employed
            <Field
              type="radio"
              name="employmentStatus"
              value="unemployed"
            />{" "}
            Unemployed
            <ErrorMessage
              name="employmentStatus"
              component="div"
              className="error"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
