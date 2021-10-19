import { FC } from "react"
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
    const maxRating: number = 5;
    return (
        <div className="flex items-center justify-center">
            {Array.from({ length: rating }, (_, i) => i + 1).map(i => (
                <StarIconFull key={i} />
            ))}
            {Array.from({ length: maxRating - rating }, (_, i) => i + 1).map(i => (
                <StarIconEmpty key={i} />
            ))}
        </div>
    );
};

const Avatar = ({ img }: { img: string }) => {
    return (
        <div className="flex items-center">
            <Image src={img} alt="avatar" className="rounded-full mr-4" width={48} height={48} />
        </div>
    );
};

const Review: FC<ReviewProps> = ({ user, review }) => {

    const { rating, content, date } = review;
    const { avatar, fullName } = user;

    return (
        <div className="space-y-5">
            <div className="grid grid-cols-3">
                <div className="grid grid-cols-2">
                    <Rating rating={rating} />
                    <Avatar img={avatar} />
                </div>
                <div className="space-y-3">
                    <p>{fullName}</p>
                    <p className="text-gray-300 truncate">{content}</p>
                    <button className="px-3 py-2 border border-primary rounded-md">
                        Ver respuesta completa
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-gray-300">{date}</p>
                </div>
            </div>
            <hr className="py-1" />
        </div>
    )
}

export default Review




