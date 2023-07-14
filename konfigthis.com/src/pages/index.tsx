import { Cta } from "@/components/Cta";
import { EnsureHighQualitySdks } from "@/components/EnsureHighQualitySdks/EnsureHighQualitySdks";
import { FooterSimple } from "@/components/FooterSimple/FooterSimple";
import { GetSdksInAnyLanguage } from "@/components/GetSdksInAnyLanguage/GetSdksInAnyLanguage";
import { GetSdksWithZeroEffort } from "@/components/GetSdksWithZeroEffort/GetSdksWithZeroEffort";
import { HeaderSimple } from "@/components/HeaderSimple/HeaderSimple";
import { HeroBullets } from "@/components/HeroBullets/HeroBullets";
import { Quotes } from "@/components/Quotes/Quotes";
import { TrustedBy } from "@/components/TrustedBy/TrustedBy";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konfig | Generate SDKs for your REST API</title>
        <meta
          name="description"
          content="Konfig makes it easy for you to onboard external developers.
          Easily publish SDKs in all major languages so your customers can
          quickly integrate your API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HeaderSimple />
        <HeroBullets />
        <TrustedBy />
        <GetSdksWithZeroEffort />
        <GetSdksInAnyLanguage />
        <EnsureHighQualitySdks />
        <Quotes />
        <Cta />
        <FooterSimple
          data={[
            {
              title: "Company",
              links: [
                {
                  label: "About",
                  link: "https://konfigthis.com/about",
                },
                {
                  label: "Blog",
                  link: "https://konfigthis.com/blog",
                },
              ],
            },
            {
              title: "Resources",
              links: [
                {
                  label: "Documentation",
                  link: "https://konfigthis.com/docs/",
                },
                {
                  label: "Tutorials",
                  link: "https://konfigthis.com/docs/category/tutorials",
                },
                {
                  label: "Getting Started",
                  link: "https://konfigthis.com/docs/getting-started/openapi-specification",
                },
                {
                  label: "Free OAS Linter",
                  link: "https://konfigthis.com/docs/tutorials/setup-linting",
                },
              ],
            },

            {
              title: "Contact",
              links: [
                {
                  label: "Schedule a Demo",
                  link: "https://konfigthis.com/schedule-demo",
                },
                {
                  label: "founders@konfigthis.com",
                  link: "mailto:founders@konfigthis.com",
                },
              ],
            },
          ]}
        />
      </main>
    </>
  );
}
