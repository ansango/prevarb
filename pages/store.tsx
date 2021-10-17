import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";

const Store: NextPage = () => {
    const { t } = useI18n();
    return (
        <DefaultLayout>
            <PageSeo title={t("store.seo.title")} description={t("store.seo.description")} />
            <main>
                <h1>{t("store.title")}</h1>
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

export default Store;