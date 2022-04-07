import Link from "next/link";

const NavSmall = ({ active, items = ["moon"] }) => {
  const activeClass = "border-b-2 border-white text-white hover:cursor-pointer";
  const hoverClass =
    "hover:border-b-2 border-primary-200 hover:text-primary-200 hover:cursor-pointer";
  return (
    <div>
      <ul className="uppercase flex items-center gap-8 text-sm tracking-widest leading-10 mb-8">
        {items.map((item, index) => {
          return (
            <Link key={index} href={`/destination/${item}`} passHref>
              <li className={active == item ? activeClass : hoverClass}>
                {item}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavSmall;
