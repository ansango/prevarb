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
          <div className="bg-white rounded-lg w-2/3 lg:w-1/2 xl:w-1/3 p-4 shadow text-primary">
            <div>
              <span className=" relative inline-block date uppercase font-medium tracking-widest">
                Lunes
              </span>
              <div className="grid grid-cols-2">
                <div className="flex mb-2">
                  <div className="w-2/12">
                    <span className="text-sm block">10:00</span>
                  </div>
                  <div className="w-1/12">
                    <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                  </div>
                  <div className="w-9/12">
                    <span className="text-sm font-semibold block">Apertura</span>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-2/12">
                    <span className="text-sm  block">14:00</span>
                  </div>
                  <div className="w-1/12">
                    <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                  </div>
                  <div className="w-9/12">
                    <span className="text-sm font-semibold block">Cierre</span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-2/12">
                    <span className="text-sm  block">10:00</span>
                  </div>
                  <div className="w-1/12">
                    <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                  </div>
                  <div className="w-9/12">
                    <span className="text-sm font-semibold block">Apertura</span>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-2/12">
                    <span className="text-sm  block">14:00</span>
                  </div>
                  <div className="w-1/12">
                    <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                  </div>
                  <div className="w-9/12">
                    <span className="text-sm font-semibold block">Cierre</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className=" relative inline-block date uppercase font-medium tracking-widest">
                Martes
              </span>
              <div className="flex mb-2">
                <div className="w-2/12">
                  <span className="text-sm  block">8:00a</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Apertura</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-2/12">
                  <span className="text-sm  block">2:00p</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Cierre</span>
                </div>
              </div>
            </div>
            <div>
              <span className=" relative inline-block date uppercase font-medium tracking-widest">
                Miércoles
              </span>
              <div className="flex mb-2">
                <div className="w-2/12">
                  <span className="text-sm  block">8:00a</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Apertura</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-2/12">
                  <span className="text-sm  block">2:00p</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Cierre</span>
                </div>
              </div>
            </div>
            <div>
              <span className=" relative inline-block date uppercase font-medium tracking-widest">
                Jueves
              </span>
              <div className="flex mb-2">
                <div className="w-2/12">
                  <span className="text-sm  block">8:00a</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Apertura</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-2/12">
                  <span className="text-sm  block">2:00p</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Cierre</span>
                </div>
              </div>
            </div>
            <div>
              <span className=" relative inline-block date uppercase font-medium tracking-widest">
                Viernes
              </span>
              <div className="flex mb-2">
                <div className="w-2/12">
                  <span className="text-sm  block">8:00a</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Apertura</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-2/12">
                  <span className="text-sm  block">2:00p</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Cierre</span>
                </div>
              </div>
            </div>
            <div>
              <span className=" relative inline-block date uppercase font-medium tracking-widest">
                Sábado
              </span>
              <div className="flex mb-2">
                <div className="w-2/12">
                  <span className="text-sm  block">8:00a</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Apertura</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-2/12">
                  <span className="text-sm  block">2:00p</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Cierre</span>
                </div>
              </div>
            </div>
            <div>
              <span className="relative inline-block date uppercase font-medium tracking-widest">
                Domingo
              </span>
              <div className="flex mb-2">
                <div className="w-2/12">
                  <span className="text-sm  block">8:00a</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Apertura</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-2/12">
                  <span className="text-sm  block">2:00p</span>
                </div>
                <div className="w-1/12">
                  <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                </div>
                <div className="w-9/12">
                  <span className="text-sm font-semibold block">Cierre</span>
                </div>
              </div>
            </div>
          </div>
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
