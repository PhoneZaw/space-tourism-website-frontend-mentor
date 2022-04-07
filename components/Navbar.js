import Link from "next/link";
import { useState, useEffect } from "react";

const styles = {
  navActive: "border-b-4 border-white text-white",
  navHover: "hover:border-primary-200 border-primary-200 hover:border-b-4",
  navActiveMobile: "border-r-4 border-white text-white",
};
const items = [
  {
    id: "00",
    title: "Home",
    link: "/",
  },
  {
    id: "01",
    title: "Destination",
    link: "/destination/moon",
  },
  {
    id: "02",
    title: "Crew",
    link: "/crew/douglas-hurley",
  },
  {
    id: "03",
    title: "Technology",
    link: "/technology/1",
  },
];

const Navbar = ({ active = "00" }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="flex items-stretch ml-12 mt-2 lg:mt-10">
      <div className="flex-1 flex items-center justify-between py-5">
        <Link href="/">
          <a>
            <svg width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </a>
        </Link>
        <span className="border-b-[0.5px] border-white border-opacity-40 flex-auto ml-16 hidden lg:block"></span>
      </div>
      {/* hamburger menu icon */}
      <div
        className="sm:hidden flex items-center mr-10"
        onClick={() => setIsOpen(true)}
      >
        <svg className="hover:cursor-pointer" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <ul className="flex-1 hidden sm:flex items-stretch pl-6 lg:pl-16 pr-6 gap-8 lg:gap-16 backdrop-blur-xl bg-gray-600 bg-opacity-10 tracking-wider uppercase">
        {items.map((item) => {
          return (
            <Link key={item.id} href={item.link} passHref>
              <li
                className={`flex items-center hover:cursor-pointer px-1 ${
                  active === item.id ? styles.navActive : styles.navHover
                }
          `}
              >
                <span className="text-primary-200 mr-2">{item.id} </span>{" "}
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
      {isOpen && (
        <div className="backdrop-blur-xl absolute inset-y-1 right-1 w-2/3 z-50">
          {/* close button */}
          <div
            className="absolute top-4 right-4 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
          <ul className="mt-20 ml-6 space-y-6 uppercase tracking-widest">
            {items.map((item) => {
              return (
                <Link key={item.id} href={item.link} passHref>
                  <li
                    className={`flex items-center hover:cursor-pointer px-1 ${
                      active === item.id && styles.navActiveMobile
                    }
          `}
                  >
                    <span className="text-primary-200 mr-2">{item.id} </span>{" "}
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
