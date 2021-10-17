import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Calendar } from "components/ui";



const Home: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("home.seo.title")} description={t("home.seo.description")} />
      <main>
        <h1 className="text-3xl font-bold text-center pb-5">{t("home.title")}</h1>
        <div className="grid md:grid-cols-2 gap-20 bg-gray-200 p-20">
          <div className="text-center">
            <h2 className="text-3xl uppercase py-10">Actividad del mes</h2>
            <p className="px-10 pb-10">Todos los meses organizamos talleres y clases de formación relacionados con un estilo de vida sostenible y una alimentación saludable</p>
            <button className="uppercase bg-green-600 px-5 py-3 rounded-full text-white">Ver actividades</button>
          </div>
          <Calendar />
        </div>
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
