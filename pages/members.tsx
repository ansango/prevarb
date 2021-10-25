import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Title } from "components/ui/titles";
import { ContainerContent } from "components/ui/containers";

const Members: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("members.seo.title")} description={t("members.seo.description")} />
      <main>
        <ContainerContent>
          <Title text={t("members.title")} />
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

export default Members;
