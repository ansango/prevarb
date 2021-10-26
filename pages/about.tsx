import type { GetStaticProps, NextPage } from "next";
import { useI18n } from "next-localization";
import PageSeo from "components/utils/PageSeo";
import DefaultLayout from "layouts/DefaultLayout";
import { Title } from "components/ui/titles";
import Image from "next/image";
import colab1 from "public/static/images/colaboradores/agavela.png";
import colab2 from "public/static/images/colaboradores/coop57.png";
import colab3 from "public/static/images/colaboradores/espazo.png";
import colab4 from "public/static/images/colaboradores/fiare.png";
import colab5 from "public/static/images/colaboradores/mercado.png";
import colab6 from "public/static/images/colaboradores/nosa.png";
import colab7 from "public/static/images/colaboradores/reas.png";
import colab8 from "public/static/images/colaboradores/somos.png";

const About: NextPage = () => {
  const { t } = useI18n();
  return (
    <DefaultLayout>
      <PageSeo title={t("about.seo.title")} description={t("about.seo.description")} />
      <main>
        <section className=" ">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
                <Title text={t("about.title")} />
              </h1>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
                Quando cetero his ne, eum admodum sapientem ut.
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                  Ad vix debet docendi
                </h2>
                <p className="mt-3 text-lg ">
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut,
                  persius eripuit quo id. Sit te euismod tacimates.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 ">Per ei quaeque sensibus</h3>
                      <p className="mt-2 ">
                        Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens
                        labore facete mea ei. Pro id apeirian dignissim.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 ">
                        Cu imperdiet posidonium sed
                      </h3>
                      <p className="mt-2 ">
                        Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique
                        cu nec. Nec ex maluisset inciderint, ex quis.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium leading-6 ">
                        Nulla omittam sadipscing mel ne
                      </h3>
                      <p className="mt-2 ">
                        At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus
                        ut vix. Ut eos iudico quando soleat, nam modus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img
                  src="https://source.unsplash.com/random/360x480"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg "
                />
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                    Eam nibh gloriatur ex
                  </h2>
                  <p className="mt-3 text-lg ">
                    Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine
                    theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.
                  </p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium leading-6 ">
                          Cibo augue offendit has ad
                        </h3>
                        <p className="mt-2 ">
                          An per velit appellantur, ut utinam minimum nominavi sit, odio nostro
                          habemus ne nec. Ne sonet regione contentiones est.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium leading-6 ">
                          At eum ferri luptatum lobortis
                        </h3>
                        <p className="mt-2 ">
                          Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod
                          periculis. Te sit primis iisque efficiantur.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium leading-6 ">
                          Dicunt verterem evertitur eu sea
                        </h3>
                        <p className="mt-2 ">
                          Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo
                          fabulas vim eu, sonet saperet eleifend ut vix.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src="https://source.unsplash.com/random/361x481"
                    alt=""
                    className="mx-auto rounded-lg shadow-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-5 py-24 mx-auto lg:px-16">
            <div className="flex flex-col w-full mb-8 text-center">
              <span className="mb-4 text-sm font-medium tracking-wide text-gray-500 uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </span>
            </div>
            <div className="mx-auto text-center">
              <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
                <a href="https://agavelaspg.org/" target="_blank" rel="noreferrer">
                  <Image src={colab1} alt="colab1" />
                </a>
                <a href="https://www.coop57.coop/es/galiza" target="_blank" rel="noreferrer">
                  <Image src={colab2} alt="colab2" />
                </a>
                <a href="https://espazo.coop/" target="_blank" rel="noreferrer">
                  <Image src={colab3} alt="colab3" />
                </a>
                <a href="https://www.fiarebancaetica.coop/" target="_blank" rel="noreferrer">
                  <Image src={colab4} alt="colab4" />
                </a>
                <a href="https://www.mercadosocial.net/" target="_blank" rel="noreferrer">
                  <Image src={colab5} alt="colab5" />
                </a>
                <a
                  href="https://www.nosaenerxia.gal/index.php/gl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={colab6} alt="colab6" />
                </a>
                <a href="https://www.reasred.org/reas-galicia" target="_blank" rel="noreferrer">
                  <Image src={colab7} alt="colab7" />
                </a>
                <a href="https://somosconexion.coop/" target="_blank" rel="noreferrer">
                  <Image src={colab8} alt="colab8" />
                </a>
              </div>
            </div>
          </div>
        </section>
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

export default About;
