import { FC, useState } from "react"
import { StarIconEmpty, StarIconFull } from "../icons";
import Image from 'next/image';

interface IUser {
    id: number;
    fullName: string;
    avatar: string | any;
}

interface IReview {
    title: string;
    content: string;
    rating: number;
    date: string;
}

type ReviewProps = {
    review: IReview;
    user: IUser;
}

const Rating = ({ rating }: { rating: number }) => {
    const maxRating = 5;
    return (
        <div className="flex">
            {Array.from({ length: rating }, (_, i) => i + 1).map(i => (
                <StarIconFull key={i} />
            ))}
            {Array.from({ length: maxRating - rating }, (_, i) => i + 1).map(i => (
                <StarIconEmpty key={i} />
            ))}
        </div>
    );
};

const Avatar = ({ img, w, h }: { img: string, w: number, h: number }) => {
    return <Image src={img} alt="avatar" className="rounded-full mr-4" width={w} height={h} />

};

const Review: FC<ReviewProps> = ({ user, review }) => {
    const [isActive, setIsActive] = useState(false)
    const { rating, content, date } = review;
    const { avatar, fullName } = user;

    return (
        <>
            <div className="md:hidden p-5 space-y-3">
                <div className="flex items-center space-x-5">
                    <Avatar img={avatar} w={48} h={48} />
                    <div>
                        <p>{fullName}</p>
                        <Rating rating={rating} />
                    </div>

                </div>
                <p className="text-gray-300">{date}</p>
                {!isActive && <p className="text-gray-300 line-clamp-3">{content}</p>}
                {isActive && <p className="text-gray-300">{content}</p>}
                <button className="px-3 py-2 border border-primary rounded-md" onClick={() => setIsActive(!isActive)}>
                    {!isActive && <span>Ver respuesta completa</span>}
                    {isActive && <span>Ocultar respuesta completa</span>}
                </button>
            </div>
            <div className="hidden md:block space-y-5">
                <div className="grid grid-cols-3">
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center items-center">
                            <Rating rating={rating} />
                        </div>
                        <div className="flex justify-center items-center">
                            <Avatar img={avatar} w={56} h={56} />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p>{fullName}</p>
                        {!isActive && <p className="text-gray-300 line-clamp-3">{content}</p>}
                        {isActive && <p className="text-gray-300">{content}</p>}
                        <button className="px-3 py-2 border border-primary rounded-md" onClick={() => setIsActive(!isActive)}>
                            {!isActive && <span>Ver respuesta completa</span>}
                            {isActive && <span>Ocultar respuesta completa</span>}
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-gray-300">{date}</p>
                    </div>
                </div>
                <hr className="py-1" />
            </div>
        </>
    )
}

export default Review




