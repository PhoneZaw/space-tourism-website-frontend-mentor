import Navbar from "../components/Navbar";
import MainButton from "../components/MainButton";

export default function Home() {
  return (
    <div className="bg-[url('../public/assets/home/background-home-mobile.jpg')] sm:bg-[url('../public/assets/home/background-home-tablet.jpg')] lg:bg-[url('../public/assets/home/background-home-desktop.jpg')] bg-cover w-screen min-h-screen flex flex-col">
      <Navbar active="00" />
      <main className="flex flex-col lg:flex-row lg:justify-around items-center flex-auto px-10">
        <section className="mt-10 items-center flex flex-col lg:block">
          <h5 className="text-[28px] uppercase sm:tracking-[4.2px]">
            So, You want to travel to
          </h5>
          <h1 className="text-[120px] sm:text-[150px] text-white font-Bellefair uppercase leading-[172px] tracking-tight px-0 mx-0">
            Space
          </h1>
          <p className="text-lg max-w-sm sm:tracking-wide text-center lg:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <MainButton />
      </main>
    </div>
  );
}
