/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Title } from "components/ui/titles";

const Products: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("products.seo.title")} description={t("products.seo.description")} />
      <main>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-col w-full mb-20 items-start space-y-10">
              <Title text={t("products.title")} />
              <p className="lg:w-2/3 leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                tile poke farm-to-table. Franzen you probably havent heard of them man bun deep
                jianbing selfies heirloom.
              </p>
            </div>
          </div>
        </section>
        <section className="pb-6  ">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://source.unsplash.com/301x301/?random"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 "
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/200x200/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/201x201/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/202x202/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/203x203/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/204x204/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/205x205/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/206x206/?random"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 "
              src="https://source.unsplash.com/207x207/?random"
            />
            <img
              src="https://source.unsplash.com/302x302/?random"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 "
            />
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`../locales/${locale}.json`);

  return {
    props: {
      lngDict: language.default,
    },
  };
};

export default Products;
