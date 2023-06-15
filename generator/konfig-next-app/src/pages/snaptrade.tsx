import { GetStaticProps } from "next";
import Error from "next/error";

/**
 * this is just here to make sure the old /snaptrade link still works
 */

// https://konfigworkspace.slack.com/archives/C04E71257MY/p1686707939100859?thread_ts=1686326339.649639&cid=C04E71257MY

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    redirect: {
      destination: `/snaptrade/snaptrade-demos`,
      permanent: false,
    },
  };
};

function Org() {
  return <Error statusCode={404} />;
}

export default Org;
