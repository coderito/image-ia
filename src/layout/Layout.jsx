import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div class="p-4 pt-20 sm:ml-64">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="gap-4 mb-4"><Outlet /></div>
      </div>
    </div>
  );
};
