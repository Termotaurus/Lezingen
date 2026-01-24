"use client";

import React from "react";

interface ObfuscatedEmailProps {
  email: string;
  className?: string;
}

const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({ email, className }) => {
  const reversedEmail = email.split("").reverse().join("");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
      className={className}
    >
      {reversedEmail}
    </a>
  );
};

export default ObfuscatedEmail;
