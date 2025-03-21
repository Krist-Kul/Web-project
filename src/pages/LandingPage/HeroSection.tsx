"use client";

import React from "react";
import SearchForm from "./SearchForm";

function HeroSection() {
    return (
      <section
        className="relative p-10 bg-cover h-[600px] text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="mt-16 max-w-[600px]">
          <h2 className="mb-4 text-5xl font-semibold max-sm:text-3xl">
            Make your travel whishlist, we'll do the rest
          </h2>
          <p className="text-xl">Special offers to suit your plan</p>
        </div>
        <div className='mt-30'>
        <SearchForm />
        </div>
      </section>
    );
}


export default HeroSection;
