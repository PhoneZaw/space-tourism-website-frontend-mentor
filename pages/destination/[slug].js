import Image from "next/image";
import Navbar from "../../components/Navbar";
import NavSmall from "../../components/NavSmall";
import SubHeading from "../../components/SubHeading";
import { data } from "../../utils/data";

const destination = ({ destination, names }) => {
  const { name, desc, distance, time, img } = destination;
  return (
    <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover w-screen min-h-screen flex flex-col pb-10">
      <Navbar active="01" />
      <SubHeading id="01" text="Pick your destination" />
      <main className="flex-auto flex flex-col lg:flex-row lg:justify-around items-center lg:items-start px-10">
        <figure className="mt-10 mb-10 shadow-lg w-2/3 flex justify-center">
          <Image
            className="items-center"
            src={`/assets/destination/${img}`}
            alt={name}
            height={450}
            width={450}
          />
        </figure>
        <section className="max-w-sm flex flex-col items-center lg:items-start sm:mr-10 lg:mr-20">
          <NavSmall active={name} items={names} />
          <h2 className="text-[100px] uppercase leading-[114.6px] font-Bellefair text-white">
            {name}
          </h2>
          <p className="text-lg tracking-wider text-center lg:text-left">
            {desc}
          </p>
          <hr className="opacity-40 mt-12 mb-6 w-full" />
          <div className="flex w-full justify-between items-center">
            <div className="uppercase">
              <h6 className="text-sm tracking-widest mb-1">Avg. destination</h6>
              <h6 className="text-[28px] font-Bellefair text-white">
                {distance}
              </h6>
            </div>
            <div className="uppercase">
              <h6 className="text-sm tracking-widest mb-1">EST. Travel Time</h6>
              <h6 className="text-[28px] font-Bellefair text-white">{time}</h6>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default destination;
export async function getStaticPaths() {
  const names = getNames();
  const paths = names.map((name) => {
    return { params: { slug: name } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const destination = data.destinations.find((destination) => {
    return destination.name === slug;
  });
  if (!destination) {
    return {
      notFound: true,
    };
  }
  const names = getNames();
  if (slug) {
    return {
      props: { destination, names },
    };
  }
  return {
    props: {},
  };
}

function getNames() {
  const names = data.destinations.map((destination) => {
    return destination.name;
  });
  return names;
}
