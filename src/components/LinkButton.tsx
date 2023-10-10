import Image from "next/image";

interface PropTypes {
  iconLink: string;
  altDetail: string;
}

const LinkButton = ({ iconLink, altDetail }: PropTypes) => {
  return (
    <div className="flex">
      <div className="w-10 h-10 lg:w-14 lg:h-14 lx:w-16 lx:h-16 bg-white rounded-full flex items-center justify-center border border-marron ease-in duration-100 hover:border-4 hover:border-marron hover:duration-100 hover:ease-in">
        <div className="w-8 h-8 lg:w-12 lg:h-12 lx:w-14 lx:h-14 border border-marron rounded-full flex items-center justify-center hover:cursor-pointer ">
          <div className="w-5 h-5 lg:w-6 lg:h-6 lx:w-8 lx:h-8 relative">
            <Image
              src={iconLink}
              sizes="32px"
              fill
              style={{ objectFit: "contain" }}
              alt={altDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkButton;
