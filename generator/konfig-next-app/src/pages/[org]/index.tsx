import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";

import { demos } from "@/utils/demos";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const organizationId = ctx.params?.org;
  if (organizationId === undefined || Array.isArray(organizationId)) {
    return {
      notFound: true,
    };
  }
  const organization = demos.find(
    (organization) => organization.id === organizationId
  );
  if (organization === undefined) {
    return {
      notFound: true,
    };
  }
  if (organization.portals.length < 1) {
    return { notFound: true };
  }
  const portal = organization.portals[0];
  if (portal.demos.length < 1) {
    return { notFound: true };
  }
  const demo = portal.demos[0];
  return {
    redirect: {
      destination: `/${organization.id}/${portal.id}/${demo.id}`,
      permanent: false,
    },
  };
};

function Org() {
  return <Error statusCode={404} />;
}

export default Org;
