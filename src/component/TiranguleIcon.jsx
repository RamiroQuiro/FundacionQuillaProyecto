import React from "react";

function TrieanguleIcon({className,colorFill}) {
  return (
    <svg
    className={`${className} duration-500 group hover:translate-x-16`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={colorFill}
      viewBox="0 0 24 24"
    >
        <g className="group-hover:translate-x-5 group-hover:opacity-0 duration-300"
        >
      <path d="M20.0 19.3l-9-15.6-.3-.3c-.5-.3-1.1-.2-1.4.3l-9 16.6c-.2.1-.2.3-.2.5 0 .6.4 1 1 1h18c.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4z"></path>
            
        </g>
        <g className="group-hover:translate-x-5 duration-500 group-hover:opacity-0 delay-150"
        >
      <path d="M21.9 19.3l-9-15.6-.3-.3c-.5-.3-1.1-.2-1.4.3l-9 15.6c-.2.1-.2.3-.2.5 0 .6.4 1 1 1h18c.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4z"></path>
      </g>
    </svg>
  );
}

export default TrieanguleIcon;