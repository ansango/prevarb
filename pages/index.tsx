import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Calendar, ContactForm, Slider } from "components/ui";
import { RecycleIcon } from "components/ui/icons";
import Image from 'next/image'

import { ImagesSlider, ImagesCarousel } from "components/images";


// generate text random

const generateText = (): string => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const words = lorem.split(" ");
  const random = Math.floor(Math.random() * words.length);
  return words.slice(random, random + 3).join(" ");
};


const imgSlider = ImagesSlider.map((image: any, index: number) => (<Image src={image.src} key={image.id} alt={image.alt} />))
const imgCarousel = ImagesCarousel.map((image: any, index: number) => (<div key={index} className="text-center"><div className="pb-5 px-5 md:px-20"><Image className="rounded-full" src={image.src} key={image.id} alt={image.alt} width={640} height={640} /><p className="py-5"> {generateText()}</p></div></div >))




const Home: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("home.seo.title")} description={t("home.seo.description")} />
      <main>
        <div className="md:mt-20 md:h-96">
          <Slider elements={imgSlider} navigation={true} />
        </div>
        <div className="py-10">
          <h2 className="text-center uppercase text-2xl md:text-3xl p-5 md:py-10">Principios</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-24 sm:gap-32 md:gap-20  md:grid-cols-4 ">
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
          <div className="flex justify-center pt-10">
            <button className="border border-primary bg-gray-200  rounded-full px-10 py-2">Hazte Socia</button>
          </div>
        </div>
        <div className="py-16">
          <h2 className="text-center uppercase text-2xl md:text-3xl p-5 md:py-10">Nuestros productos</h2>
          <div className="md:px-5">
            <Slider elements={imgCarousel} navigation={true} loop slidesPerView={3} spaceBetween={10} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-20 bg-gray-200 py-10 md:p-20">
          <div className="text-center">
            <h2 className="text-center uppercase text-2xl md:text-3xl p-5 md:py-10">Actividad del mes</h2>
            <p className="px-10 pb-10">Todos los meses organizamos talleres y clases de formación relacionados con un estilo de vida sostenible y una alimentación saludable</p>
            <button className="uppercase bg-primary px-5 py-3 rounded-full text-white">Ver actividades</button>
          </div>
          <Calendar />
        </div>
        <div className="py-10">
          <h2 className="text-center uppercase text-2xl md:text-3xl p-5 md:py-10">Vosotras</h2>

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
