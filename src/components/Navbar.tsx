import Image from "next/image";
import NavDesktopMenu from "./NavDesktopMenu";

const Navbar = () => {
  return (
    <nav className=" w-full px-[50px] md:px-[70px] lg:px-[100px] hidden lg:flex items-center justify-between h-36">
      <div className="flex items-center gap-6">
        <Image src="/cloclo_logo.png" width={80} height={80} alt="logo" />
        <h1 className="uppercase text-xl xl:text-2xl font-light text-marron tracking-[4px]">
          Chloé Bailly
        </h1>
      </div>

      <NavDesktopMenu />
    </nav>
  );
};

export default Navbar;
