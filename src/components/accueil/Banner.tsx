const Banner = () => {
  return (
    <div className="w-full sm:px-[50px] md:px-[70px] lg:px-[100px] mb-28 sm:mb-36 lg:mb-44">
      <div
        className={`h-[400px]  xl:h-[500px]  bg-[url('/photo_banniere_accueil.webp')] bg-cover flex items-center justify-center `}
      >
        <div className="w-4/5 sm:w-3/5 h-3/5 bg-white opacity-90 p-2">
          <div className="w-full h-full border border-marron flex flex-col justify-center items-center gap-5 p-2">
            <h1 className="uppercase font-prata text-2xl lg:text-3xl xl:text-4xl max-[390px]:tracking-[1px] max-[461px]:tracking-[2px]  min-[462px]:tracking-[6px] text-center">
              Chloé Bailly
            </h1>
            <h2 className="font-sans text-green text-md sm:text-xl lg:text-2xl xl:text-3xl text-center font-light tracking-wider">
              Diététicienne Nutritionniste & Coach Pilates
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
