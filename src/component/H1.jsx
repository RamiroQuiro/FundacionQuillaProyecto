import React from "react";

export default function H1({children,className}) {
  return (
    <h1 className={`${className} font-bold text-blue-500 text-5xl md:text-7xl my-5`}>
      {children}
    </h1>
  );
}
