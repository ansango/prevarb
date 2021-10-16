import { NextComponentType } from "next";
import { ReactElement } from "react";

type Container = {
  children: ReactElement;
};
const ContainerLayout: NextComponentType<Container> = ({ children }) => {
  return (
    <div className="">
      <div className="flex flex-col justify-between h-screen">{children}</div>
    </div>
  );
};

export default ContainerLayout;
