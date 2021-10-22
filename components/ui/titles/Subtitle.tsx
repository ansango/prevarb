import { FC, memo } from "react";

type Props = {
    text: string;
};

const Subtitle: FC<Props> = ({ text }) => {
    return (
        <h2 className="text-center uppercase text-2xl md:text-3xl">{text}</h2>
    )
}

export default memo(Subtitle)
