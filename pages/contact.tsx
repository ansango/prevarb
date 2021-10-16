import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/seo/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";

const Contact: NextPage = () => {
    const { t } = useI18n();
    return (
        <DefaultLayout>
            <PageSeo title={t("contact.seo.title")} description={t("contact.seo.description")} />
            <main>
                <h1>{t("contact.title")}</h1>
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