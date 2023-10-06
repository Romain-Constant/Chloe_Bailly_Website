interface PropTypes {
  onClick: () => void;
}

const ActivePageIcon = ({ onClick }: PropTypes) => {
  return (
    <button
      className="w-6 h-6 md:w-8 md:h-8 border border-marron rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <div className="w-4 h-4 md:w-6 md:h-6 border border-marron rounded-full bg-marron"></div>
    </button>
  );
};

export default ActivePageIcon;
