import { RecycleIcon } from "../icons"

const BannerStatic = () => {
    return (
        <div className="grid grid-cols-2 gap-24 sm:gap-32 md:gap-20  md:grid-cols-4 ">
            <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Ecologismo</p>
            </div>
            <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Comercio Justo</p>
            </div>
            <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Sostenibilidad</p>
            </div>
            <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Sostenibilidad</p>
            </div>
        </div>
    )
}

export default BannerStatic
