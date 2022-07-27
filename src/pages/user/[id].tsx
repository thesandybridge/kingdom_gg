import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ErrorPage from "next/error";
import styles from "./Users.module.css";
import Head from "next/head";
import Layout from "../../components/Layout";

const User = () => {
  const { data: sesh } = useSession();
  const router = useRouter();
  const { id } = router.query;

  if (!sesh || sesh.user?.id !== id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout fullWidth={false} breadcrumbs={true} stripes={true}>
      <article>
        <Head>
          <title>The Kingdom | User: {sesh.user?.name}</title>
          <meta property="og:type" content="object"></meta>
          <meta
            property="og:title"
            content={`The Kingdom | User: ${sesh.user?.name}`}
            key="title"
          />
          <meta
            property="og:url"
            content={process.env.VERCEL_URL + router.asPath}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="kingdomgaming.gg" />
          <meta property="twitter:url" content={process.env.VERCEL_URL} />
          <meta
            name="twitter:title"
            content={`The Kingdom | User: ${sesh.user?.name}`}
          />
        </Head>
        <section className={styles.userBody}>
          <div className="inner-content">
            <h1>Feature Coming Soon...</h1>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default User;
