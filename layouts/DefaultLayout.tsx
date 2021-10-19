import type { ReactElement } from "react";
import { NextComponentType } from "next";
import { ContainerLayout } from "components/ui/containers";
import { Footer, Header } from "components/ui/navs";


type Layout = {
  children: ReactElement | ReactElement[];
};

const DefaultLayout: NextComponentType<Layout> = ({ children }) => {
  return (
    <ContainerLayout>
      <Header />
      {children}
      <Footer />
    </ContainerLayout>
  );
};

export default DefaultLayout;
