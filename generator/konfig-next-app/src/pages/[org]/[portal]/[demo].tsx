import { DemoPortal, PortalState } from "@/components/DemoPortal";
import { observer } from "mobx-react";
import { Organization, Portal, Demo, demos } from "@/utils/demos";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  organization: Organization;
  portal: Portal;
  demo: Demo;
}> = async (ctx) => {
  if (!ctx.params?.org || Array.isArray(ctx.params.org)) {
    return {
      notFound: true,
    };
  }
  const organization = demos.find(({ id }) => id === ctx.params?.org);

  if (organization === undefined)
    return {
      notFound: true,
    };

  if (!ctx.params?.portal || Array.isArray(ctx.params.portal)) {
    return {
      notFound: true,
    };
  }

  const portal = organization.portals.find(
    ({ id }) => id === ctx.params?.portal
  );

  if (portal === undefined)
    return {
      notFound: true,
    };

  if (!ctx.params?.demo || Array.isArray(ctx.params.demo)) {
    return {
      notFound: true,
    };
  }

  const demo = portal.demos.find(({ id }) => id === ctx.params?.demo);

  if (demo === undefined)
    return {
      notFound: true,
    };

  return {
    props: {
      organization,
      portal,
      demo,
    },
  };
};

const Snaptrade = observer(
  ({
    organization,
    portal,
    demo,
  }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [state] = useState(
      new PortalState({
        ...portal,
        organizationId: organization.id,
        demoId: demo.id,
      })
    );

    return (
      <>
        <Head>
          <title>{`${organization.organizationName} | Konfig`}</title>
        </Head>
        <DemoPortal state={state} />
      </>
    );
  }
);

export default Snaptrade;
