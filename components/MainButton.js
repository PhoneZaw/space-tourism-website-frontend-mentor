import { useRouter } from "next/router";

const MainButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-white text-3xl font-Bellefair w-56 h-56 sm:w-64 sm:h-64 rounded-full text-center text-black uppercase hover:ring-[88px] ring-gray-700 ring-opacity-40 transition-all ease-in-out my-10"
      onClick={() => router.push("/destination/moon")}
    >
      Explore
    </button>
  );
};

export default MainButton;
