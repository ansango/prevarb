import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { ContactForm } from "components/ui/forms";
import { Title } from "components/ui/titles";
import { ContainerContent } from "components/ui/containers";
import { MapLocation } from "components/ui/blocks";

const Contact: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("contact.seo.title")} description={t("contact.seo.description")} />
      <main>
        <ContainerContent>
          <Title text={t("contact.title")} />
        </ContainerContent>
        <ContainerContent>
          <MapLocation />
        </ContainerContent>
        <ContainerContent>
          <section>
            <div className="text-primary py-8">
              <div className="container mx-auto flex flex-col items-start xl:flex-row my-12 xl:my-24">
                <div className="flex flex-col w-full xl:sticky md:top-36 xl:w-1/3 mt-2 md:mt-12 px-8">
                  <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                    Árbore
                  </p>
                  <p className="text-sm md:text-base smb-4">
                    Rúa López Mora, 30, 36211 Vigo, Pontevedra,{" "}
                    <a href="tel:+34986233497" className="cursor-pointer hover:underline">
                      +34 986 23 34 97
                    </a>
                  </p>
                  <a
                    className="text-primary tracking-loose hover:underline"
                    href="mailto:info@arbore.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@arbore.org
                  </a>
                </div>
                <div className="ml-0 xl:ml-12 w-full xl:w-2/3 sticky">
                  <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                      <div
                        className="border-2-2 border-primary absolute h-full border"
                        style={{ right: "50%", border: "2px solid #416729", borderRadius: "1%" }}
                      ></div>
                      <div
                        className="border-2-2 border-primary absolute h-full border"
                        style={{ left: "50%", border: "2px solid #416729", borderRadius: "1%" }}
                      ></div>
                      <div className="mb-8 flex justify-between items-center w-full left-timeline">
                        <div className="order-1  w-5/12 px-1 py-4 text-right">
                          <h4 className="mb-3 font-bold text-lg md:text-2xl">Lunes</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <li>10:00 - 14:00</li>
                            <li>17:00 - 20:00</li>
                          </ul>
                        </div>
                        <div className="order-1 w-5/12 px-1 py-4 text-left">
                          <h4 className="mb-3 font-bold text-lg md:text-2xl">Martes</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <li>10:30 - 20:30</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1  w-5/12 px-1 py-4 text-right">
                          <h4 className="mb-3 font-bold text-lg md:text-2xl">Miércoles</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <li>10:00 - 14:00</li>
                            <li>17:00 - 20:00</li>
                          </ul>
                        </div>
                        <div className="order-1 w-5/12 px-1 py-4 text-left">
                          <h4 className="mb-3 font-bold text-lg md:text-2xl">Jueves</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                              <li>10:30 - 20:30</li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-8 flex justify-between items-center w-full left-timeline">
                        <div className="order-1  w-5/12 px-1 py-4 text-right">
                          <h4 className="mb-3 font-bold text-lg md:text-2xl">Viernes</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <li>10:00 - 14:00</li>
                            <li>17:00 - 20:00</li>
                          </ul>
                        </div>
                        <div className="order-1 w-5/12 px-1 py-4 text-left">
                          <h4 className="mb-3 font-bold text-lg md:text-2xl">Sábado</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <li>10:30 - 14:00</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="order-1  w-5/12 px-1 py-4">
                          <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Domingo</h4>
                          <ul className="text-sm md:text-base leading-snug  text-opacity-100">
                            <li>Cerrado</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ContainerContent>
        <ContainerContent>
          <ContactForm translations={t("common.contactForm")} />
        </ContainerContent>
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

export default Contact;
