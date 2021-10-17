import { NextComponentType } from "next";
import { ReactElement } from "react";

type Container = {
  children: ReactElement;
};
const ContainerLayout: NextComponentType<Container> = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto xl:max-w-6xl">
      <div className="flex flex-col justify-between h-screen">{children}</div>
    </div>
  );
};

export default ContainerLayout;
