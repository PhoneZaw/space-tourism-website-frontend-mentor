import Link from "next/link";

const styles = {
  active: "bg-white h-3 w-3 rounded-full hover:cursor-pointer",
  hover:
    "bg-gray-600 h-3 w-3 rounded-full hover:bg-primary-100 hover:cursor-pointer",
};
const NavDot = ({ active, items }) => {
  return (
    <div className="flex gap-4 mt-10 items-center justify-center lg:absolute bottom-16 left-32">
      {items.map((item, index) => {
        return (
          <Link key={index} href={`/crew/${item}`} passHref>
            <div
              className={active == item ? styles.active : styles.hover}
            ></div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavDot;
