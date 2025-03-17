import React, { useState } from "react";
import InputField from "./InputField";
import DateField from "./DateField";
import Button from "./Button";

const SearchForm: React.FC = () => {
  const [destination, setDestination] = useState("Bangkok, Thailand");
  return (
    <section className="flex flex-col justify-center px-6 py-8 bg-white rounded-2xl shadow-sm max-md:px-5">
      <h2 className="text-xl font-semibold text-neutral-900 max-md:max-w-full">
        Find your perfect stay?{" "}
      </h2>

      <div className="flex flex-wrap gap-4 items-center mt-8 w-full max-md:max-w-full">
        <InputField
          label="Enter Destination"
          value=''
          onChange={setDestination}
          placeholder="Enter your destination"
          leadingIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/d31d1300ee5999b99bed53a98f31e50b947fbb664fd83fb9448e1adf8215cfbb?placeholderIfAbsent=true&apiKey=0faacf3c0e244d62ae8917b197af2f46"
          className="flex-1 shrink self-stretch my-auto rounded basis-0 min-h-14 min-w-60"
        />

        <DateField
          label="Check In"
          value="Fri, 12 Jan 2025"
          className="self-stretch my-auto w-60"
        />

        <DateField
          label="Check Out"
          value="Sun, 14 Jan 2025"
          className="self-stretch my-auto w-60"
        />

        <InputField
          label="Rooms & Guests"
          value="1 room, 2 guests"
          leadingIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/e97fdca654d48ed0d599f0b8084d6e57d66c163d17a016e9d3b24f3bedc3f841?placeholderIfAbsent=true&apiKey=0faacf3c0e244d62ae8917b197af2f46"
          trailingIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/e1cf7c3f17008bea66f4d4017b6e7de5c5fd105cef9d09b5eb87da37baf792db?placeholderIfAbsent=true&apiKey=0faacf3c0e244d62ae8917b197af2f46"
          className="self-stretch my-auto w-60"
        />
      </div>

      <div className="flex flex-wrap gap-6 items-center mt-8 w-full text-sm font-medium text-neutral-900 max-md:max-w-full">
        <div className="flex self-stretch my-auto min-h-12" />
        <Button
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0e1d2ea9fc115435200c68ad4858bf6b548867c877dcb307338bd6690ff5ede7?placeholderIfAbsent=true&apiKey=0faacf3c0e244d62ae8917b197af2f46"
          className="bg-[#8DB1D3] text-[#112211] transition duration-500 hover:bg-[#6c9bc7] hover:text-[#112211] cursor-pointer"
        >
          Show Places
        </Button>
      </div>
    </section>
  );
};

export default SearchForm;