import React from "react";

export default function Header({ title, desc, image }) {
  return (
    <>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{desc}</p>
    </>
  );
}