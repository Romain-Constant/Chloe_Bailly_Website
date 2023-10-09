import Link from "next/link";

const DoctolibStick = () => {
  return (
    <Link
      href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
      target="_blank"
    >
      <button className="w-[20px] h-[90px]  sm:w-[30px] sm:h-[130px] md:w-[50px] md:h-[140px] flex items-center justify-center border border-white hover:border-marron fixed top-1/2 right-0 ease-in duration-100 hover:duration-100 hover:ease-in">
        <img
          src="/doctolib_side_link.svg"
          alt="Doctolib link"
          className="max-w-full max-h-full fill-green"
        />
      </button>
    </Link>
  );
};

export default DoctolibStick;
