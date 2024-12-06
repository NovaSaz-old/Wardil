import React from "react";
import VolunteerCard from "./VolunteerCard";

function TeamList({ teamMembers }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member) => (
        <VolunteerCard key={member.id} {...member} />
      ))}
    </div>
  );
}

export default TeamList;
