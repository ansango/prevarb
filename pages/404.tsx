import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/seo/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";

const NotFound: NextPage = () => {
    const { t } = useI18n();
    return (
        <DefaultLayout>
            <PageSeo title={t("404.seo.title")} description={t("404.seo.description")} />
            <main>
                ERROR 404
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

export default NotFound;
