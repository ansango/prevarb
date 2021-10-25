import { RecycleIcon } from "../icons";

const BannerStatic = ({ translations }: { translations: any }) => {
  return (
    <div className="grid grid-cols-2 gap-24 sm:gap-32 md:gap-20  md:grid-cols-4 ">
      <div className="flex flex-col items-center">
        <RecycleIcon className="text-7xl" />
        <p className="md:text-xl">{translations.value1}</p>
      </div>
      <div className="flex flex-col items-center">
        <RecycleIcon className="text-7xl" />
        <p className="md:text-xl">{translations.value2}</p>
      </div>
      <div className="flex flex-col items-center">
        <RecycleIcon className="text-7xl" />
        <p className="md:text-xl">{translations.value3}</p>
      </div>
      <div className="flex flex-col items-center">
        <RecycleIcon className="text-7xl" />
        <p className="md:text-xl">{translations.value4}</p>
      </div>
    </div>
  );
};

export default BannerStatic;
