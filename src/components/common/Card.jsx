import React from 'react';

/**
 * Reusable Card Component
 * Supports header, body, footer, image, badge, and interactive hover states.
 */
const Card = ({
  children,
  className = '',
  image,
  imageAlt = '',
  imageBadge,
  hoverEffect = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm ${
        hoverEffect
          ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {image && (
        <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {imageBadge && (
            <div className="absolute top-3 left-3 bg-mpp-green text-white text-xs font-semibold px-2.5 py-1 rounded shadow">
              {imageBadge}
            </div>
          )}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-3 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`text-gray-600 text-sm leading-relaxed ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 flex items-center justify-between ${className}`}>
    {children}
  </div>
);

export default Card;
