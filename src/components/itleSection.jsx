// TitleSection.js
import React from 'react';

export default function TitleSection(   {
  title ,
  subtitle1,
  subtitle2,
}) {
  return (
    <div className="my-8 text-center">
      <h2 className="mb-4 text-4xl font-bold">{title}</h2>
      <p className="mb-2">{subtitle1}</p>
      <p>{subtitle2}</p>
    </div>
  );
}
