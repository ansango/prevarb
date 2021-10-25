import { FC, useState } from "react";
import { StarIconEmpty, StarIconFull } from "../icons";

interface IUser {
  id: number;
  fullName: string;
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
  i18: any;
};

const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  return (
    <div className="flex">
      {Array.from({ length: rating }, (_, i) => i + 1).map((i) => (
        <StarIconFull key={i} />
      ))}
      {Array.from({ length: maxRating - rating }, (_, i) => i + 1).map((i) => (
        <StarIconEmpty key={i} />
      ))}
    </div>
  );
};

const Avatar = () => {
  return <div className="bg-gradient-to-r from-primary to-brown rounded-full w-14 h-14"></div>;
};

const Review: FC<ReviewProps> = ({ user, review, i18 }) => {
  const [isActive, setIsActive] = useState(false);
  const { rating, content, date } = review;
  const { fullName } = user;

  return (
    <>
      <div className="md:hidden p-5 space-y-3">
        <div className="flex items-center space-x-5">
          <Avatar />
          <div>
            <p>{fullName}</p>
            <Rating rating={rating} />
          </div>
        </div>
        <p className="text-gray-300">{date}</p>
        {!isActive && <p className="text-gray-300 line-clamp-3">{content}</p>}
        {isActive && <p className="text-gray-300">{content}</p>}
        <button
          className="px-3 py-2 border border-primary rounded-md"
          onClick={() => setIsActive(!isActive)}
        >
          {!isActive && <span>{i18.showButton}</span>}
          {isActive && <span>{i18.hideButton}</span>}
        </button>
      </div>
      <div className="hidden md:block space-y-5">
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center">
              <Rating rating={rating} />
            </div>
            <div className="flex justify-center items-center">
              <Avatar />
            </div>
          </div>
          <div className="space-y-3">
            <p>{fullName}</p>
            {!isActive && <p className="text-gray-300 line-clamp-3">{content}</p>}
            {isActive && <p className="text-gray-300">{content}</p>}

            <button
              className="px-3 py-2 border border-primary rounded-md"
              onClick={() => setIsActive(!isActive)}
            >
              {!isActive && <span>{i18.showButton}</span>}
              {isActive && <span>{i18.hideButton}</span>}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-300">{date}</p>
          </div>
        </div>
        <hr className="py-1" />
      </div>
    </>
  );
};

export const ReviewList = ({ reviews, i18 }: any) => {
  return (
    <>
      {reviews.map((review: any) => (
        <Review key={review.title} review={review} user={review.user} i18={i18} />
      ))}
    </>
  );
};

export default Review;
