import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { ContainerContent } from "components/ui/containers";
import { ButtonPrimary } from "components/ui/buttons";
import { BannerStatic, Calendar, ReviewList, Slider, Carousel } from "components/ui/blocks";
import { Subtitle, Title } from "components/ui/titles";
import { ContactForm } from "components/ui/forms";

const Home: NextPage = () => {
  const { t } = useI18n();

  return (
    <DefaultLayout>
      <PageSeo title={t("home.seo.title")} description={t("home.seo.description")} />
      <main>
        <ContainerContent>
          <Title text={t("home.title")} />
        </ContainerContent>
        <div className="md:mt-20 md:h-96">
          <Slider />
        </div>
        <ContainerContent>
          <Subtitle text={t("home.components.values.h2")} />
          <BannerStatic translations={t("home.components.values.values")} />
          <div className="flex justify-center">
            <button className="border border-primary bg-gray-200  rounded-full px-10 py-2 my-10">
              {t("home.components.values.btn")}
            </button>
          </div>
        </ContainerContent>
        <ContainerContent>
          <Subtitle text={t("home.components.products.h2")} />
          <Carousel />
        </ContainerContent>
        <div className="grid md:grid-cols-2 gap-20 bg-gray-200 py-10 md:py-16">
          <div className="text-center space-y-10 m-auto">
            <Subtitle text={t("home.components.activities.h2")} />
            <p className="px-14">{t("home.components.activities.description")}</p>
            <ButtonPrimary>
              <span>{t("home.components.activities.btn")}</span>
            </ButtonPrimary>
          </div>
          <Calendar />
        </div>
        <ContainerContent>
          <Subtitle text={t("home.components.reviews.h2")} />
          <ReviewList
            i18={t("common.review")}
            reviews={[
              {
                user: {
                  id: 1,
                  fullName: "Ruth P??rez Costas",
                },
                title: "Moi recomendable",
                content:
                  "Moi recomendable. Productos ecol??xicos de primeira, coidando o medio e pensando na sostenibilidade e na reciclaxe. Xente super amable. Podese comprar como en calquera tenda ou tam??n formar parte dela pois ?? unha cooperativa de consumo. Tras unha entrevista persoal podedes formar parte dun proxecto que busca ante todo coidar o medio e ser sostible",
                date: new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                rating: 5,
              },
              {
                user: {
                  id: 2,
                  fullName: "Marta Viajando en familia",
                },
                title: "Me ha encantado",
                content:
                  "He ido por primera vez hoy y me ha encantado. Tienen bastante surtido y a granel incluso productos limpieza. Me encant?? que tengan jab??n al corte-peso y productos frescos. Surtido marcas gallegas tambi??n. Harinas, pasta, cereales, semillas... muy amables. Zona para jugar los peques mientras tu compras. Para repetir sin duda...!!!",
                date: new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                rating: 5,
              },
              {
                user: {
                  id: 3,
                  fullName: "Mar??a PA",
                },
                title: "Me encanta",
                content:
                  "Me encanta esta tienda, es completamente ecol??gica, hay productos veganos 100% y de calidad. Trato bueno y hay peri??dicos ecol??gicos gratis. Siempre que puedo compro cositas aqu?? porque el precio es excelente y nada caro comparado con otros sitos.",
                date: new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                rating: 5,
              },
              {
                user: {
                  id: 4,
                  fullName: "Yaiza Comesa??a Cruz",
                },
                title: "Destacar os seus obradoiros de coci??a",
                content:
                  "Destacar os seus obradoiros de coci??a. Recetas saudables, sostibles e orixinais. O mellor de todo a profesora! Ademais do seu bo facer ten uns co??ecementos sobre alimentaci??n e elaboraci??n sobresa??ntes. Gracias!",
                date: new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                rating: 5,
              },
            ]}
          />
        </ContainerContent>
        <div className="pt-12 pb-24 px-5 md:px-0">
          <ContactForm translations={t("common.contactForm")} />
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
