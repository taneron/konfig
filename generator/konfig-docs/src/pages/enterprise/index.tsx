import { LayoutWithoutNav } from "@site/src/components/LayoutWithoutNav/LayoutWithoutNav";
import Index from "./_index.mdx";
import Head from "@docusaurus/Head";

export default function SdkPage() {
  const description =
    "With Konfig, you can run an efficient onboarding process by spending less time handholding customers.";
  return (
    <LayoutWithoutNav>
      <Head>
        <title>Konfig for Enterprise APIs</title>
        <meta property="og:image" content="/img/konfig-sdks.png" />
        <meta property="og:title" content="Konfig for Enterprise" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@konfig" />
        <meta name="twitter:title" content="Konfig SDKs for Public APIs" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/img/konfig-sdks.png" />
      </Head>
      <Index />
    </LayoutWithoutNav>
  );
}
