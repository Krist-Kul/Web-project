"use client";

import React from "react";

function UserProfileDropdown() {
  return (
    <div className="absolute right-0 top-full p-4 rounded-lg min-w-[200px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white z-10">
      <div className="flex gap-3 items-center pb-4 border-b border-solid border-b-slate-200">
        <div className="w-8 h-8 rounded-full bg-slate-200" />
        <div className="flex flex-col">
          <div className="font-medium text-zinc-900">John Doe</div>
          <div className="text-sm text-zinc-500">Online</div>
        </div>
      </div>

      <nav className="mt-4">
        <ul>
          <li className="flex gap-3 items-center px-0 py-2 cursor-pointer text-zinc-900 hover:bg-slate-50 rounded">
            <i className="ti ti-user text-zinc-500" />
            <span>My account</span>
          </li>
          <li className="flex gap-3 items-center px-0 py-2 cursor-pointer text-zinc-900 hover:bg-slate-50 rounded">
            <i className="ti ti-credit-card text-zinc-500" />
            <span>Payments</span>
          </li>
          <li className="flex gap-3 items-center px-0 py-2 cursor-pointer text-zinc-900 hover:bg-slate-50 rounded">
            <i className="ti ti-logout text-zinc-500" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default UserProfileDropdown;
