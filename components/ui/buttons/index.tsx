import { FC, ReactElement } from 'react';

type PrimaryProps = {
    children?: ReactElement | ReactElement[];
    action?: () => void;
};

const ButtonPrimary: FC<PrimaryProps> = ({ children, action, ...rest }) => {
    return (
        <button className="uppercase bg-primary px-5 py-3 rounded-full text-white" onClick={action} {...rest}>{children}</button>
    )
}



export { ButtonPrimary }