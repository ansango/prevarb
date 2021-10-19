import type { ReactElement } from "react";
import { NextComponentType } from "next";
import { ContainerLayout, Footer, Header, } from "components/ui";

type Layout = {
  children: ReactElement;
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
