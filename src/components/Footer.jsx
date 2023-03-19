import React from "react";

export const Footer = () => {
  const date = new Date();

  return (
    <div class="pt-10 text-center">
      <span class="font-semibold text-gray-400 uppercase">
        Todos los derecho reservados © {date.getFullYear()}
      </span>
    </div>
  );
};
