import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * Color hierarchy:
 * - 'cta': mpp-red for primary call-to-actions ("Join MPP")
 * - 'primary': mpp-green for core party actions
 * - 'secondary': mpp-green-dark for secondary actions
 * - 'outline': border with mpp-green
 * - 'white': white button for dark backgrounds
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base tracking-wide',
  };

  const variantStyles = {
    cta: 'bg-mpp-red hover:bg-[#b00e1f] text-white focus:ring-mpp-red shadow-md hover:shadow-lg',
    primary: 'bg-mpp-green hover:bg-mpp-green-dark text-white focus:ring-mpp-green shadow-sm hover:shadow',
    secondary: 'bg-mpp-green-dark hover:bg-[#003d2d] text-white focus:ring-mpp-green-dark',
    outline: 'border-2 border-mpp-green text-mpp-green hover:bg-mpp-green hover:text-white focus:ring-mpp-green',
    outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-mpp-green-dark focus:ring-white',
    white: 'bg-white text-mpp-green-dark hover:bg-gray-100 focus:ring-white shadow-sm hover:shadow',
    ghost: 'text-gray-700 hover:text-mpp-green hover:bg-green-50 focus:ring-mpp-green',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`mr-2 ${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={`ml-2 ${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
