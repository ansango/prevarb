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
