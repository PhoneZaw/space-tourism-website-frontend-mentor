import Link from "next/link";

const styles = {
  active:
    "lg:w-20 lg:h-20 w-14 h-14 flex justify-center items-center rounded-full bg-white text-black font-Bellefair text-lg lg:text-2xl hover:cursor-pointer",
  hover:
    "lg:w-20 lg:h-20 w-14 h-14 flex justify-center items-center rounded-full font-Bellefair text-lg lg:text-2xl border border-gray-600 hover:cursor-pointer hover:border-white",
};
const Nav3 = ({ active, items }) => {
  return (
    <div className="lg:mr-20 flex lg:flex-col gap-10 lg:my-auto mt-16 sm:mt-28 mb-10">
      {items.map((item) => {
        return (
          <Link key={item} href={`/technology/${item}`} passHref>
            <div className={item == active ? styles.active : styles.hover}>
              {item}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav3;
