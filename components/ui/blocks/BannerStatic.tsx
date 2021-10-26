import Image from "next/image";

import espiga from "public/static/images/banner/espiga.svg";
import hojas from "public/static/images/banner/hojas.svg";
import mano from "public/static/images/banner/mano.svg";
import mundo from "public/static/images/banner/mundo.svg";

const BannerStatic = ({ translations }: { translations: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-32 md:gap-20  lg:grid-cols-4 ">
      <div className="flex flex-col items-center justify-center">
        <Image src={mano} alt="espiga" />
        <p className="text-lg md:text-xl mt-5">{translations.value3}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={mundo} alt="espiga" />
        <p className="text-lg md:text-xl mt-5">{translations.value2}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={espiga} alt="espiga" />
        <p className="text-lg md:text-xl mt-5">{translations.value4}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={hojas} alt="hojas" />
        <p className="text-lg md:text-xl mt-5">{translations.value1}</p>
      </div>
    </div>
  );
};

export default BannerStatic;
