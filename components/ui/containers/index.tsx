import { FC, ReactElement, ReactNode } from "react";


type Container = {
  children: ReactElement[] | ReactElement | ReactNode | null;
};

const ContainerLayout: FC<Container> = ({ children }) => {
  return (
    <div className="mx-auto xl:max-w-7xl">
      <div className="flex flex-col justify-between h-screen">{children}</div>
    </div>
  );
};

const ContainerContent: FC<Container> = ({ children }) => {
  return <div className="py-10 space-y-10 md:py-16">{children}</div>;
};

export { ContainerLayout, ContainerContent };
