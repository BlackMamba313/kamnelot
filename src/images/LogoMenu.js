import React from 'react';

const LogoMenu = ({width, height, color, onClick}) => {
  return (
    <svg style={{cursor: 'pointer'}} onClick={onClick} width={width || "60"} height={height || "60"} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 10H52.5V15H7.5V10ZM7.5 27.5H37.5V32.5H7.5V27.5ZM7.5 45H52.5V50H7.5V45Z" fill={color || "#333333"}/>
    </svg>

  );
};

export default (LogoMenu);