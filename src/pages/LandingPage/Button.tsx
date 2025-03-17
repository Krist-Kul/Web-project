"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  className = "",
  onClick,
}) => {
  return (
    <div className="self-stretch my-auto">
      <button
        className={`flex gap-1 justify-center items-center p-4 rounded min-h-12 ${className}`}
        onClick={onClick}
      >
        {icon && (
          <img
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        )}
        <span className="self-stretch my-auto">{children}</span>
      </button>
    </div>
  );
};

export default Button;
