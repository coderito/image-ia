import React from "react";

export const Footer = () => {
  const date = new Date();

  return (
    <div class="pt-10 text-center bg-[#252A34] h-24">
      <span class="font-semibold text-[#EEEEEE] uppercase">
        Todos los derecho reservados © {date.getFullYear()}
      </span>
    </div>
  );
};
