import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import Image from 'next/image'
import { ImagesSlider } from "components/images";
import { ContainerContent } from "components/ui/containers";
import { ButtonPrimary } from "components/ui/buttons";
import { BannerStatic, Calendar, Review, Slider } from "components/ui/blocks";
import { Subtitle } from "components/ui/titles";
import { ContactForm } from "components/ui/forms";
import avatar from "public/static/images/blog/sample.png";
const imgSlider = ImagesSlider.map((image: any, index: number) => (<Image src={image.src} key={image.id} alt={image.alt} />))

const Home: NextPage = () => {
  const { t } = useI18n();
  console.log("Home");
  return (
    <DefaultLayout>
      <PageSeo title={t("home.seo.title")} description={t("home.seo.description")} />
      <main>
        <div className="md:mt-20 md:h-96">
          <Slider />
        </div>
        <ContainerContent>
          <Subtitle text="Principios" />
          <BannerStatic />
          <div className="flex justify-center">
            <button className="border border-primary bg-gray-200  rounded-full px-10 py-2">Hazte Socia</button>
          </div>
        </ContainerContent>
        <ContainerContent>
          <Subtitle text="Nuestros productos" />
          {/* <Slider elements={imgCarousel} navigation={true} loop slidesPerView={3} spaceBetween={10} /> */}
        </ContainerContent>
        <div className="grid md:grid-cols-2 gap-20 bg-gray-200 py-10 md:py-16">
          <div className="text-center space-y-10 m-auto">
            <Subtitle text="Actividad del mes" />
            <p className="px-14">Todos los meses organizamos talleres y clases de formación relacionados con un estilo de vida sostenible y una alimentación saludable</p>
            <ButtonPrimary>
              <span>{"Ver Actividades"}</span>
            </ButtonPrimary>
          </div>
          <Calendar />
        </div>
        <ContainerContent>
          <Subtitle text="Vosotras" />
          <Review user={{ id: 1, fullName: "Francisco Jimenez", avatar: avatar }} review={{
            title: "Lo mejor en comercio local", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: new Date().toLocaleDateString("es-ES", {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }), rating: 5
          }} />

          <Review user={{ id: 1, fullName: "Francisco Jimenez", avatar: avatar }} review={{
            title: "Lo mejor en comercio local", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: new Date().toLocaleDateString("es-ES", {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }), rating: 4
          }} />
          <Review user={{ id: 1, fullName: "Francisco Jimenez", avatar: avatar }} review={{
            title: "Lo mejor en comercio local", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: new Date().toLocaleDateString("es-ES", {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }), rating: 3
          }} />
          <Review user={{ id: 1, fullName: "Francisco Jimenez", avatar: avatar }} review={{
            title: "Lo mejor en comercio local", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: new Date().toLocaleDateString("es-ES", {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }), rating: 5
          }} />
        </ContainerContent>
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
