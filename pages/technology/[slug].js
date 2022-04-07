import Image from "next/image";
import Nav3 from "../../components/Nav3";
import Navbar from "../../components/Navbar";
import SubHeading from "../../components/SubHeading";
import { data } from "../../utils/data";

const technology = ({ tech, parts }) => {
  return (
    <div className="flex flex-col bg-[url('/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover max-w-screen min-h-screen">
      <Navbar active="03" />
      <SubHeading id="03" text="SPACE LAUNCH 101" />
      <main className="lg:flex-auto flex lg:ml-20 mb-20 flex-col-reverse lg:flex-row">
        <section className="flex flex-col lg:flex-row items-center px-10 lg:px-0">
          <Nav3 active={tech.id} items={parts} />
          <div className="flex flex-col items-center lg:block">
            <h5 className="uppercase text-3xl font-Bellefair tracking-wide">
              The Terminology...
            </h5>
            <h2 className="uppercase text-6xl text-white leading-[76px] font-Bellefair">
              {tech.name}
            </h2>
            <p className="text-primary-100 my-4 max-w-md text-lg tracking-wider leading-8 text-center lg:text-left">
              {tech.desc}
            </p>
          </div>
        </section>
        <figure className="lg:flex-auto flex h-60 max-w-screen lg:w-auto lg:justify-end">
          <div
            className={`tech-img-${tech.id} bg-cover w-full lg:w-4/5 h-60 sm:h-72 lg:h-96 bg-white mt-10`}
          ></div>
        </figure>
      </main>
    </div>
  );
};

export default technology;

export async function getStaticPaths() {
  const parts = getParts();
  const paths = parts.map((part) => {
    return { params: { slug: part } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  if (!slug) {
    return { props: {} };
  }
  const tech = data.technologies.find((tech) => tech.id === slug);
  const parts = getParts();
  return {
    props: {
      tech,
      parts,
    },
  };
}

function getParts() {
  const parts = data.technologies.map((tech) => {
    return tech.id;
  });
  return parts;
}
