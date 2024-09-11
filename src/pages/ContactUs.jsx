import ContactForm from "../components/ContactForm";
import hero2sm from "../assets/images/hero2sm.png";

export default function ContactUs() {
  return (
    <>
      <img src={hero2sm} alt="hero" />
      <div className="p-2 ss4:p-8">
        <div className="my-12 text-center">
          <h4 className="text-2xl">Contact Us</h4>
          <h3 className="my-4 text-4xl font-semibold text-blue-900">
            Meet Our Volunteers
          </h3>
          <p className="font-medium">
            We're dedicated to making a positive impact on the world. By working
            together, we strive to provide essential support and resources to
            those in need. Our progress is measured not only in numbers but also
            in the lives we've transformed.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
