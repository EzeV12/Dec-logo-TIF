
import React from 'react';
import { DecalogueItemData } from '../types';

interface DecalogueItemProps {
  data: DecalogueItemData;
  isReversed: boolean;
}

const DecalogueItem: React.FC<DecalogueItemProps> = ({ data, isReversed }) => {
  const { id, title, description, iconClass, textBgClass, textFgClass, iconBgClass, iconFgClass } = data;

  const numberFormatted = String(id).padStart(2, '0');

  const iconNumberSectionClasses = `
    w-full md:w-1/3 
    p-6 md:p-8 
    flex flex-col items-center justify-center 
    ${iconBgClass} ${iconFgClass} 
    rounded-t-md md:rounded-t-none 
    ${isReversed ? 'md:rounded-r-md md:order-2' : 'md:rounded-l-md md:order-1'}
  `;

  const textContentSectionClasses = `
    w-full md:w-2/3 
    p-6 md:p-8 
    flex flex-col justify-center 
    ${textBgClass} ${textFgClass} 
    rounded-b-md md:rounded-b-none
    ${isReversed ? 'md:rounded-l-md md:order-1' : 'md:rounded-r-md md:order-2'}
  `;
  
  // Specific rounding for stacked view (small screens) vs side-by-side (medium screens up)
  const articleClasses = `
    flex flex-col md:flex-row 
    w-full shadow-xl rounded-md overflow-hidden 
    transform hover:scale-[1.01] hover:shadow-2xl focus-within:shadow-2xl focus-within:scale-[1.01] 
    transition-all duration-300 ease-in-out 
    my-5 md:my-7 
    min-h-[220px] md:min-h-[200px] lg:min-h-[240px]
  `;

  return (
    <article
      className={articleClasses}
      aria-labelledby={`decalogue-title-${id}`}
      tabIndex={0} 
    >
      <div className={iconNumberSectionClasses}>
        <span className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 opacity-80" aria-hidden="true">
          {numberFormatted}
        </span>
        <i className={`${iconClass} text-5xl sm:text-6xl`} aria-hidden="true"></i>
      </div>

      <div className={textContentSectionClasses}>
        <div className="flex items-center mb-3 md:mb-4">
          <i className={`${iconClass} fa-fw mr-2 text-xl md:text-2xl opacity-75 md:hidden`} aria-hidden="true"></i> {/* Icon for small screens title */}
          <h3 className="text-lg md:text-xl font-semibold leading-tight" id={`decalogue-title-${id}`}>{title}</h3>
        </div>
        <p className="text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default DecalogueItem;
