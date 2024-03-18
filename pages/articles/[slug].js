import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import Image from "next/image";

import PostBody from "../../components/articles/post-body.js";
import Layout from "../../components/general/layout/layout.js";
import DateFormatter from "../../components/general/date-formatter.js";
import BackLink from "../../components/general/backlink.js";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml.js";
import FilArianne from "./../../components/general/filarianne";
import NextService from "../../components/general/NextService.js";
import ContactUs from "./../../components/general/ContactUs";
import markdownToToc from "../../lib/markdownToToc.js";
import Toc from "../../components/articles/toc/Toc.js";
import ProgressScrollBar from "../../components/ProgressScrollBar.js";
import ButtonTop from "../../components/general/ButtonTop.js";
import useMediaQuery from "./../../lib/useMediaQuery";

export default function Post({ post }) {
  const router = useRouter();
  const isMobile = useMediaQuery(500);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  let startDebouncing;
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentH2, setCurrentH2] = useState(0);
  const [currentH3, setCurrentH3] = useState(0);
  let h2s;
  let h3s;
  /////

  const selectH2 = () => {
    const h2ScrollLevels = [];

    document.querySelectorAll("h2").forEach((h2, key) => {
      h2ScrollLevels.push(h2.offsetTop);
    });
    const copyH2Levels = h2ScrollLevels;
    const closest =
      h2ScrollLevels?.length != 0 &&
      copyH2Levels?.reduce((prev, curr) => {
        return Math.abs(curr - currentScroll) < Math.abs(prev - currentScroll) ? curr : prev;
      });

    /// position de h2 dans le doc
    currentH2 = closest && h2ScrollLevels.findIndex(item => item === closest);
    /// le plus près doit être toujours inférieur, on passe à la partie suivante quand on a fini de lire la précédente !
    setCurrentH2(closest < currentScroll ? currentH2 : currentH2 - 1);
  };

  const selectH3 = currentScroll => {
    const h3ScrollLevels = [];

    document.querySelectorAll("h3").forEach((h3, key) => {
      h3ScrollLevels.push(h3.offsetTop);
    });
    const copyH3Levels = h3ScrollLevels;
    const closest =
      h3ScrollLevels?.length != 0 &&
      copyH3Levels?.reduce((prev, curr) => {
        return Math.abs(curr - currentScroll) < Math.abs(prev - currentScroll) ? curr : prev;
      });

    /// position de h2 dans le doc
    currentH3 = closest && h3ScrollLevels.findIndex(item => item === closest);
    /// le plus près doit être toujours inférieur, on passe à la partie suivante quand on a fini de lire la précédente !
    setCurrentH3(closest < currentScroll ? currentH3 : currentH3 - 1);
  };

  const listenToScroll = () => {
    let time;

    if (startDebouncing === true) {
      setCurrentScroll(window.scrollY);
      startDebouncing = false;

      time = setTimeout(() => {
        startDebouncing = true;
      }, 100);
    }

    return () => {
      clearTimeout(Time);
    };
  };

  const linkH2 = (index = 0) => {
    h2s = document.querySelectorAll("h2");
    window.scrollTo({
      top: h2s[index].offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => setCurrentH2(index), 500);
  };

  const linkH3 = (index = 0) => {
    h3s = document.querySelectorAll("h3");
    console.log(index);
    window.scrollTo({
      top: h3s[index].offsetTop - 300,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => setCurrentH3(index), 500);
  };

  useEffect(() => {
    selectH2(currentScroll + 400);
    selectH3(currentScroll + 400);
  }, [currentScroll]);

  useEffect(() => {
    window.scroll(0, 0);
    startDebouncing = true;
    h2s = document.querySelectorAll("h2");
    h3s = document.querySelectorAll("h3");
    ///
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Layout title={post.title} description={post.description}>
      <ProgressScrollBar currentScroll={currentScroll} />
      {currentScroll > 500 && <ButtonTop />}

      {isMobile == false && (
        <Toc
          content={post.toc}
          slug={post.slug}
          currentH2={currentH2}
          currentH3={currentH3}
          linkH2={linkH2}
          linkH3={linkH3}
        />
      )}
      <div className="bigarticle ">
        <FilArianne
          links={[
            { url: "/actualite", legend: "Actualité" },
            { url: `/articles/${post.slug}`, legend: post.title },
          ]}
        />

        <figure className="picture-panorama">
          <Image
            layout="fill"
            objectFit="cover"
            alt={post.title}
            title={post.title}
            src={post.coverImage}
            placeholder="blur"
            blurDataURL="/assets/placeholder.svg"
          />
        </figure>
        <article className="container-medium">
          <p className="category">{post.category}</p>
          <h1 className="title">{post.title}</h1>

          <p className="subtitle">{post.description}</p>
          <DateFormatter dateString={post.date} className="date" />
          <PostBody content={post.content} />
          <ContactUs />
          <div className="accesrapide">
            <p className="text-center">Accès rapide</p>
            <div className="row center">
              <NextService link="/actualite" legend="Liste des articles" />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "category",
    "content",
    "thumbnail",
    "coverImage",
    "description",
  ]);
  const content = await markdownToHtml(post.content || "");
  const toc = await markdownToToc(post.content || "");

  console.log(toc);

  return {
    props: {
      post: {
        ...post,
        content,
        toc,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
