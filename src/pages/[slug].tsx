import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Footer from "../components/FooterComponent/Footer";
import Header from "../components/HeaderComponent/Header";
import Stripe from "../components/StripesComponent/Stripe";
import styles from "../styles/Mods.module.css";
import { getPostBySlug, getAllPosts } from "../utils/api";
import markdownToHtml from "../utils/markdownToHTML";
import Image from "next/image";
import SteamSVG from "../svgs/steam";
import { PostType } from "../types/posts";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Mod = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className={styles.container}>
      <Header position="relative" />
      <Breadcrumbs useDefaultStyle={false} containerClassName="breadcrumbs" />
      <main className={styles.main}>
        <Stripe height={5} amount={2} />
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <>
            <article>
              <Head>
                <title>The Kingdom | Mod: {post.title}</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:image" content={post.ogImage.url} />
                <meta property="og:type" content="object"></meta>
                <meta
                  property="og:title"
                  content={`The Kingdom | Mod: ${post.title}`}
                  key="title"
                />
                <meta property="og:image:alt" content={post.excerpt} />
                <meta
                  property="og:url"
                  content={process.env.VERCEL_URL + router.asPath}
                />
                <meta property="og:description" content={post.excerpt} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="kingdomgaming.gg" />
                <meta property="twitter:url" content={process.env.VERCEL_URL} />
                <meta
                  name="twitter:title"
                  content={`The Kingdom | Mod: ${post.title}`}
                />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.ogImage.url} />
              </Head>
              <div className={styles.modBody}>
                <div className="inner-content">
                  {post.coverImage && (
                    <div className={styles.featuredImage}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className={styles.modMeta}>
                    <h1>{post.title}</h1>

                    <div className={styles.modSocials}>
                      {post.steamLink && (
                        <a
                          className="linked-svg"
                          href={post.steamLink}
                          title={`${post.title} on Steam Workshop`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <SteamSVG />
                        </a>
                      )}
                    </div>
                  </div>
                  <Stripe height={4} amount={2} />
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  {post.trailer && (
                    <iframe
                      className={styles.trailer}
                      width="100%"
                      height="auto"
                      src={post.trailer}
                      title={`${post.title} trailer`}
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </article>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "content",
    "ogImage",
    "coverImage",
    "steamLink",
    "trailer",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Mod;
