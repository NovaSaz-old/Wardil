//import { useState } from "react";
import testimonials from "../test/testimonials.json";

export default function TestimonialCard() {
  //const [card, setCard] = useState(0);

  return (
    <div>
      <div className="flex flex-row p-20">
        {testimonials.data.map((testimonial, index) => {
          return (
            <div key={index}>
              <div className="mx-8">
                <img src={testimonial.src} alt={testimonial.alt} />
                <h3>{testimonial.name}</h3>
                <h6>{testimonial.title}</h6>
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
