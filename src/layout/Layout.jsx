import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div class="p-4 py-20 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div class="gap-4 mb-4"><Outlet /></div>
      </div>
    </div>
  );
};
