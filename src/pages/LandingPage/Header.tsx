"use client";

import React, { useState } from "react";
import UserProfileDropdown from "./UserProfileDropdown";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center px-10 py-5 max-sm:p-4">
      <nav className="flex gap-5 items-center">
        <span className="text-base text-zinc-900">Find Stays</span>
        <h1 className="text-2xl font-semibold text-zinc-900">golobe</h1>
      </nav>

      <div className="relative">
        <button
          className="w-10 h-10 rounded-full cursor-pointer bg-slate-200"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-label="User profile menu"
        />

        {isDropdownOpen && <UserProfileDropdown />}
      </div>
    </header>
  );
}

export default Header;
