import React from 'react';

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0002 20.6335L16.6572 16.2905M16.6572 16.2905C17.4001 15.5476 17.9894 14.6657 18.3914 13.6951C18.7935 12.7244 19.0004 11.6841 19.0004 10.6335C19.0004 9.5829 18.7935 8.54259 18.3914 7.57196C17.9894 6.60133 17.4001 5.71939 16.6572 4.97651C15.9143 4.23362 15.0324 3.64433 14.0618 3.24228C13.0911 2.84023 12.0508 2.6333 11.0002 2.6333C9.9496 2.6333 8.90929 2.84023 7.93866 3.24228C6.96803 3.64433 6.08609 4.23362 5.34321 4.97651C3.84288 6.47684 3 8.51172 3 10.6335C3 12.7553 3.84288 14.7902 5.34321 16.2905C6.84354 17.7908 8.87842 18.6337 11.0002 18.6337C13.122 18.6337 15.1569 17.7908 16.6572 16.2905Z"
        className="stroke-gray-400 group-hover:stroke-[#FFD84D]" // 기본 색상 및 hover 색상
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SearchIcon;
