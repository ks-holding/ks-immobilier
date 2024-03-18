// system
import { useRouter } from "next/router.js";
import { useEffect } from "react";

// components
import Layout from "../../components/general/layout/layout.js";
import BackLink from "../../components/general/backlink.js";
import Tasks from "../../components/projets/Tasks.js";
import Carousel from "../../components/projets/carousel.js";

import useMediaQuery from "../../lib/useMediaQuery.js";

/////

// constants
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml.js";
import ProjectBody from "../../components/projets/project-body.js";
import Image from "next/image";
import LightBoxGallery from "../../components/projets/gallery.js";
import FilArianne from "../../components/general/filarianne";
import NextService from "./../../components/general/NextService";

export default function Post({ project }) {
  const router = useRouter();
  //console.log(project);

  const mobile = useMediaQuery(768);

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout title={project.title} description={project.description}>
      <section id="projet">
        {!mobile && (
          <figure className="picture-panorama">
            <Image layout="fill" objectFit="cover" src={project.coverImage} alt={project.title} />
          </figure>
          // <Image className="picture_container" src={project.coverImage} alt={project.title} width={2000} height={400} />
        )}
        {mobile && <Carousel gallerie={project.gallerie} />}
        <FilArianne
          links={[
            { url: "/projets", legend: "Projets" },
            { url: `/projet/${project.slug}`, legend: project.title },
          ]}
        />
        <div className="container">
          {router.isFallback ? (
            <PostTitle>Loadiing…</PostTitle>
          ) : (
            <>
              <article>
                <h1>{project.title}</h1>
                {project.description.length != 0 && (
                  <>
                    <h2 className="description">{project.description}</h2>
                    <p className="duration">Durée du chantier {project.duration}</p>
                    {/* <p>Date du début {project.startDate}</p> */}
                  </>
                )}
              </article>
            </>
          )}

          <ProjectBody content={project.content} />
          <Tasks tasks={project.tasks} />

          {!mobile && <LightBoxGallery pictures={project.gallerie} />}
        </div>
        <div className="row center">
          <NextService link="/projets" legend="Retour à la gallerie" />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "description",
    "coverImage",
    "thumbnail",
    "date",
    "category",
    "slug",
    "content",
    "duration",
    "startDate",
    "client",
    "tasks",
    "gallerie",
  ]);
  const { content, data } = await markdownToHtml(project.content || "");
  console.log(data);
  return {
    props: {
      project: {
        ...project,
        content: content || "",
        data: data || {},
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map(project => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
