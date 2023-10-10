const Banner = () => {
  return (
    <div className="w-full px-[50px] md:px-[70px] lg:px-[100px]">
      <div
        className={`h-[400px]  xl:h-[500px]  bg-[url('/photo_banniere_accueil.png')] bg-cover flex items-center justify-center mb-36  lg:mb-44`}
      >
        <div className="w-4/5 sm:w-3/5 h-3/5 bg-white opacity-90 p-2">
          <div className="w-full h-full border border-marron flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-prata text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-[6px] text-center">
              Chloé Bailly
            </h1>
            <h2 className="font-sans text-green text-md sm:text-xl lg:text-2xl xl:text-3xl text-center font-light tracking-wider">
              Diététicienne nutritionniste & coach Pilates
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
