import React from "react";

const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`cursor-pointer rounded-full bg-violet-50 px-5 py-1 group relative w-fit z-10 text-black font-medium text-xl sm:text-2xl ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-[general] text-xs uppercase">
        <div className="">{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
