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
      <main>{children}</main>
      <Footer />
    </ContainerLayout>
  );
};

export default DefaultLayout;
