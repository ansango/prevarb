import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Calendar, ContactForm, Slider } from "components/ui";
import { RecycleIcon } from "components/ui/icons";



const Home: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("home.seo.title")} description={t("home.seo.description")} />
      <main>
        <div className="mt-20 h-96">
          <Slider />
        </div>
        <div className="py-10">
          <h2 className="text-center  uppercase text-3xl p-5 md:py-10">Principios</h2>
          <div className="flex justify-center">
            <div className="grid gap-10 md:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
              <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Ecologismo</p>
              </div>
              <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Comercio Justo</p>
              </div>
              <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Sostenibilidad</p>
              </div>
              <div className="flex flex-col items-center">
                <RecycleIcon className="text-7xl" />
                <p>Sostenibilidad</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button className="border border-primary bg-gray-200  rounded-full px-10 py-2">Hazte Socia</button>
          </div>
        </div>
        <div className="py-10">
          <h2 className="text-3xl  text-center">Nuestros productos</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-20 bg-gray-200 py-10 md:p-20">
          <div className="text-center">
            <h2 className="text-3xl uppercase p-5 md:py-10">Actividad del mes</h2>
            <p className="px-10 pb-10">Todos los meses organizamos talleres y clases de formación relacionados con un estilo de vida sostenible y una alimentación saludable</p>
            <button className="uppercase bg-primary px-5 py-3 rounded-full text-white">Ver actividades</button>
          </div>
          <Calendar />
        </div>
        <div className="py-10">
          <h2 className="uppercase text-center py-10">Vosotras</h2>

        </div>
        <div className="pt-12 pb-24 px-5 md:px-0">
          <ContactForm />
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
