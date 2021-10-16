import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/seo/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";

const Home: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("title")} description={t("description")} />
      <main>
        <h1 className="text-3xl font-bold text-center pb-5">{t("title")}</h1>
        <h2 className="text-2xl italic text-center pb-5">{t("description")}</h2>

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

export default Home;
