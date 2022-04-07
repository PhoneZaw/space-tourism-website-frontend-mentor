import Image from "next/image";
import NavBar from "../../components/Navbar";
import NavDot from "../../components/NavDot";
import SubHeading from "../../components/SubHeading";
import { data } from "../../utils/data";

const crew = ({ crew, slugs }) => {
  return (
    <div className="flex flex-col bg-[url('./../public/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./../public/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./../public/assets/crew/background-crew-desktop.jpg')] bg-cover min-h-screen">
      <NavBar active="02" />
      <SubHeading id="02" text="Meet your crew" />
      <main className="flex flex-col-reverse md:flex-col lg:flex-row lg:mr-20 justify-around items-center flex-auto relative px-10">
        <div className="flex-1">
          <section className="mx-6 lg:ml-20 flex flex-col items-center lg:items-start mt-10">
            <h5 className="uppercase text-3xl font-Bellefair tracking-wide text-center">
              {crew.role}
            </h5>
            <h2 className="uppercase text-6xl text-white leading-[76px] font-Bellefair text-center lg:text-left">
              {crew.name}
            </h2>
            <p className="text-primary-100 my-4 max-w-sm text-lg tracking-wider leading-8 text-center lg:text-left">
              {crew.desc}
            </p>
          </section>
        </div>
        <NavDot active={crew.slug} items={slugs} />
        <div className="flex flex-col flex-1 items-center justify-end h-full mx-4 sm:mx-10 mt-10 lg:mt-0">
          <Image
            src={`/assets/crew/${crew.img}`}
            alt={crew.name}
            height={600}
            width={500}
          />
          <hr className="h-px mx-6 border-gray-500 w-full lg:hidden" />
        </div>
      </main>
    </div>
  );
};

export default crew;

export async function getStaticPaths() {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const crew = data.crews.find((crew) => {
    return crew.slug === slug;
  });
  if (!crew) {
    return {
      notFound: true,
    };
  }
  const slugs = getSlugs();
  if (slug) {
    return {
      props: { crew, slugs },
    };
  }
  return {
    props: {},
  };
}

function getSlugs() {
  const slugs = data.crews.map((crew) => {
    return crew.slug;
  });
  return slugs;
}
