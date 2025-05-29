import React from "react";

const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`cursor-pointer rounded-full bg-violet-50 px-7 py-3 group relative w-fit z-10 text-black ${containerClass}`}
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
