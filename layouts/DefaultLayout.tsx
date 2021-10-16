import type { ReactElement } from "react";
import { NextComponentType } from "next";
import { ContainerLayout, Footer, Header, Navbar } from "components/ui";



type Layout = {
  children: ReactElement;
};

const DefaultLayout: NextComponentType<Layout> = ({ children }) => {
  return (
    <ContainerLayout>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ContainerLayout>
  );
};

export default DefaultLayout;
