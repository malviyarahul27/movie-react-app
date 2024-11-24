import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="relative inline-block bg-red">
      <select
        onChange={func}
        className="xl:w-40 w-fit  xl:px-4 px-2 xl:py-2 py-[2px] text-sm bg-black/20 backdrop-blur-sm text-slate-200 font-base rounded-lg outline-none shadow-lg appearance-none transition duration-200 ease-all border border-slate-600 hover:border-blue-500"
        defaultValue="0"
        name="category"
      >
        <option className="text-blue-700 bg-gray-300 font-semibold" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o} className="text-black font-medium">
            {o.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Custom Dropdown Arrow */}
      <div className="absolute xl:right-4 bg-green right-0 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
        <i className="ri-arrow-down-s-line text-xl px-1 bg-red"></i>
      </div>
    </div>
  );
};

export default Dropdown;
