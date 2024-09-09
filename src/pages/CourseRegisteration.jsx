import { Formik, Field } from "formik";

const CourseRegisteration = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        gender: "",
        address: "",
        phoneNumber: "",
        courses: [],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.fullName) {
          errors.fullName = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        }
        if (!values.gender) {
          errors.gender = "Required";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Required";
        }
        if (values.courses.length === 0) {
          errors.courses = "At least one course must be selected";
        }
        return errors;
      }}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <Field
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
          <br />
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" placeholder="Email" />
          {errors.email && <div className="error">{errors.email}</div>}
          <br />
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>

            <option value="other">Other</option>
          </Field>
          {errors.gender && <div className="error">{errors.gender}</div>}
          <br />
          <label htmlFor="address">Address:</label>
          <Field
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Field
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <div className="error">{errors.phoneNumber}</div>
          )}
          <br />
          <label htmlFor="courses">Courses:</label>
          <Field
            name="courses"
            type="checkbox"
            value="Course 1"
            onChange={handleChange}
          />{" "}
          Course 1<br />
          <Field
            name="courses"
            type="checkbox"
            value="Course 2"
            onChange={handleChange}
          />{" "}
          Course 2<br />
          <Field
            name="courses"
            type="checkbox"
            value="Course 3"
            onChange={handleChange}
          />{" "}
          Course 3<br />
          {errors.courses && <div className="error">{errors.courses}</div>}
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default CourseRegisteration;
