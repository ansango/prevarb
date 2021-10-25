import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Title } from "components/ui/titles";
import { ContainerContent } from "components/ui/containers";

const Activities: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("activities.seo.title")} description={t("activities.seo.description")} />
      <main>
        <ContainerContent>
          <Title text={t("activities.title")} />
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

export default Activities;
