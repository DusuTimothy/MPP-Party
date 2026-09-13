import React from 'react';

/**
 * Placeholder SVG Logo: Shield/circle emblem, green and white, "MPP" text
 */
const Logo = ({ className = 'h-10 w-10', showText = true, textClass = 'text-white' }) => {
  return (
    <div className="flex items-center space-x-3 select-none">
      <div className={`relative flex-shrink-0 ${className}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield Outline with Green & White */}
          <path
            d="M50 4C73 4 88 16 88 38C88 64 50 94 50 94C50 94 12 64 12 38C12 16 27 4 50 4Z"
            fill="#008751"
            stroke="#FFFFFF"
            strokeWidth="3.5"
          />
          {/* Inner Decorative Arch */}
          <path
            d="M50 12C68 12 80 22 80 40C80 60 50 84 50 84C50 84 20 60 20 40C20 22 32 12 50 12Z"
            fill="#00563F"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* White Star at Top */}
          <polygon
            points="50,18 53,26 62,26 55,31 58,39 50,34 42,39 45,31 38,26 47,26"
            fill="#FFFFFF"
          />
          {/* Central MPP Bold Text */}
          <text
            x="50"
            y="59"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="1.5"
          >
            MPP
          </text>
          {/* Subtle Laurel branch arc */}
          <path
            d="M32 67 C40 73 60 73 68 67"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-extrabold text-lg sm:text-xl tracking-tight leading-none ${textClass}`}>
            MPP
          </span>
          <span className="text-xs uppercase font-medium tracking-wider text-green-100 opacity-90">
            My Political Party
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
