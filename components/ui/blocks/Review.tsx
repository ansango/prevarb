import { FC } from "react"
import { StarIconEmpty, StarIconFull } from "../icons";
import Image from 'next/image';

interface IUser {
    id: number;
    fullName: string;
    avatar: string;
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

const Avatar = ({ img }: { img: string }) => {
    return (
        <div className="flex items-center">
            <Image src={img} alt="avatar" className="w-12 h-12 rounded-full mr-4" width={24} height={24}/>
        </div>
    );
};

const Review: FC<ReviewProps> = ({ user, review }) => {
    const maxRating: number = 5
    const {   rating,  } = review;
    const { avatar, } = user;
    console.log(maxRating - rating)
    return (
        <div>
            <Rating rating={rating} />
            <Avatar img={avatar} />
        </div>
    )
}

export default Review




