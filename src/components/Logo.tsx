
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/454dd6e1-5373-412e-b798-843fbca39193.png" 
        alt="StreamHib Logo" 
        className="h-14 md:h-16" // Increased the logo size
      />
    </div>
  );
};

export default Logo;
