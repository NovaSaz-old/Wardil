import React from "react";

function VolunteerCard({ name, position, blood, phone, email, image }) {
  return (
    <div className="text-star container mx-auto mb-4 rounded-lg bg-white p-6 px-4 shadow-md">
      <img
        src={`http://my.admin.wardil.org/${image}`}
        alt={name}
        className="mx-auto mb-4 h-24 w-24 rounded-full"
      />
      <h3 className="mb-2 text-center text-xl font-semibold">{name}</h3>
      <p className="mb-2 text-center text-gray-500">{position}</p>
      <div className="text-sm">
        <p>
          <strong>Blood:</strong> {blood}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export default VolunteerCard;
