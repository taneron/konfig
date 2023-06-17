import { FeaturesAsymmetrical } from "@/components/FeaturesAsymmetrical/FeaturesAsymmetrical";
import { FooterSimple } from "@/components/FooterSimple/FooterSimple";
import { HeaderSimple } from "@/components/HeaderSimple/HeaderSimple";
import { HeroBullets } from "@/components/HeroBullets/HeroBullets";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konfig | Demo your API</title>
        <meta
          name="description"
          content="Close deals and accelerate integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HeaderSimple />
        <HeroBullets />
        <FeaturesAsymmetrical />
        <FooterSimple />
      </main>
    </>
  );
}
