interface PropTypes {
  buttonText: string;
}

const RdvButton = ({ buttonText }: PropTypes) => {
  return (
    <button className="max-[360px]:w-36 w-44 h-12 lg:w-60 lg:h-16 border border-marron p-1 mt-4 ">
      <div className="bg-marron w-full h-full flex items-center justify-center uppercase tracking-[3px] lg:tracking-[5px] font-light text-white max-[360px]:text-[12px] text-sm lg:text-base ease-in duration-100 hover:bg-white hover:text-marron hover:duration-100 hover:ease-in">
        {buttonText}
      </div>
    </button>
  );
};

export default RdvButton;
