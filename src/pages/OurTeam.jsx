// App.jsx
import React from "react";
import TitleSection from '../components/itleSection';
import hero2sm from "../assets/images/hero2sm.png";
function OurTeam() {
  const volunteerData = [
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
    // Add more volunteers here
    // For example purposes, you can add the same data multiple times
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
    {
      name: "Darbaz Rasul",
      bloodType: "O+",
      idNo: "0000 0000",
      phone: "+964 750 000 00 00",
      email: "darbazrasul@gmail.com",
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1800&t=st=1727515061~exp=1727515661~hmac=ebcbf1fb8ec570b56d75fe4c3609b106cb125ab6b012a8eb0ca0aaf390c0a7e7",
    },
  ];

  function VolunteerCard({ name, bloodType, idNo, phone, email, imageUrl }) {
    return (
      <div className="text-star container mx-auto mb-4 rounded-lg bg-white p-6 px-4 shadow-md">
        <img
          src={imageUrl}
          alt={name}
          className="mx-auto mb-4 h-24 w-24 rounded-full"
        />
        <h3 className="mb-2 text-center text-xl font-semibold">{name}</h3>
        <p className="mb-2 text-center text-gray-500">Volunteers</p>
        <div className="text-sm">
          <p>
            <strong>Blood:</strong> {bloodType}
          </p>
          <p>
            <strong>ID NO:</strong> {idNo}
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

  return (
    <div>
      {/* Header */}
      <img src={hero2sm} alt="hero" />

<TitleSection
  title="Welcome to Our Community"
  subtitle1="We are glad to have you here."
  subtitle2="Explore our latest updates"
/>


      {/* Volunteers Section */}
      <h2 className="mb-6 text-center text-3xl font-bold">Volunteers</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {volunteerData.map((volunteer, index) => (
          <VolunteerCard key={index} {...volunteer} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
