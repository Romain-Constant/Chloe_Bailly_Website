import React from "react";

interface PropTypes {
  onClick: () => void;
}

const NonActivePageIcon = ({ onClick }: PropTypes) => {
  return (
    <button
      className="w-6 h-6 md:w-8 md:h-8 border border-marron rounded-full flex items-center justify-center"
      onClick={onClick}
    ></button>
  );
};

export default NonActivePageIcon;
