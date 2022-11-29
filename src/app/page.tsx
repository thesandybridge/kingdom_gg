"use client";

import { Stream } from "@cloudflare/stream-react";
import Link from "next/link";
import Image from "next/image";
import { PostType } from "../types/posts";
import styles from "../styles/Home.module.css";
import Stripe from "../components/StripesComponent/Stripe";
import { getAllPosts } from "../utils/api";
import King from "../svgs/king";
import Layout from "./layout";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <Stream
        className={styles.video}
        loop={true}
        controls={false}
        autoplay={true}
        responsive={false}
        muted={true}
        src={"e5c60d85f5a784113fe03d5fe209ab1f"}
      />
      <div className={styles.banner}>
        <King />
        <div className={styles.bannerTitle}>
          <h1 className={styles.title}>Kingdom</h1>
          <h3 className={styles.subTitle}>Gaming</h3>
        </div>
      </div>
    </section>
  );
};

const InfoCard = (props: PostType) => {
  return (
    <article className={styles.infoCard}>
      <div className={styles.cardHeader}>
        {props.coverImage && (
          <div className={styles.featuredImage}>
            <Image
              src={props.coverImage}
              alt={props.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}

        <h3 className={styles.title}>
          <a
            href={props.steamLink}
            target="_blank"
            title={`${props.title} on Steam Workshop`}
            rel="noreferrer noopener"
          >
            {props.title}
          </a>
        </h3>
      </div>
      <Stripe height={5} amount={2} />
      <div className={styles.cardBody}>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
      <div className={styles.cardFooter}>
        <Link href={props.slug}>
          <button>read more</button>
        </Link>
      </div>
    </article>
  );
};

type InfoPanelProps = {
  info: PostType[];
};

const InfoPanel = ({ info }: InfoPanelProps) => {
  return (
    info && (
      <section className={styles.infoPanel}>
        {info.map((post: any) => {
          return <InfoCard key={post.slug} {...post} />;
        })}
      </section>
    )
  );
};

type HomeProps = {
  allPosts: PostType[];
};

const Page = ({ allPosts }: HomeProps) => {
  return (
    <Layout fullWidth breadcrumbs={false} stripes={false}>
      <Hero />
      <Stripe height={5} amount={2} />
      <InfoPanel info={allPosts} />
    </Layout>
  );
};

export const generateStaticParams = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "steamLink",
  ]);

  return {
    props: { allPosts },
  };
};

export default Page;
