import { FC } from "react";

type Props = {
  text: string;
};

const Title: FC<Props> = ({ text }) => {
  return <h1 className="text-center uppercase text-2xl sm:text-3xl lg:text-4xl">{text}</h1>;
};

export default Title;
