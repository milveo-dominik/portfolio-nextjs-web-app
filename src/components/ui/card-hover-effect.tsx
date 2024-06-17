import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    badges?: string[];
    icon?: any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className={
            item?.link
              ? `relative group block p-2 h-full w-full`
              : `relative group block p-2 h-full w-full hover:cursor-default`
          }
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card variant={item.icon == "rocket" ? "booking" : ""}>
            <ul className="flex gap-2">
              {item.badges?.map((badge, index) => {
                return (
                  <li
                    key={index}
                    className="bg-white px-2 py-1 text-xs lg:text-sm text-black rounded-md"
                  >
                    {badge}
                  </li>
                );
              })}
            </ul>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription variant={item.icon == "rocket" ? "booking" : ""}>
              {item.description}
            </CardDescription>
            <div className="text-white absolute bottom-3 right-3">
              {item?.link && !item?.icon && (
                <svg
                  className="w-5 h-5"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              )}
              {!item?.link && !item?.icon && (
                <svg
                  className="w-5 h-5"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.6484 10.5264L13.4743 13.3523C13.8012 12.9962 14.0007 12.5214 14.0007 12C14.0007 10.8954 13.1053 10 12.0007 10C11.4793 10 11.0045 10.1995 10.6484 10.5264Z"
                    fill="#FFFFFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1211 18.2422C13.4438 18.4051 12.7343 18.5 12.0003 18.5C9.7455 18.5 7.72278 17.6047 6.14832 16.592C4.56791 15.5755 3.3674 14.3948 2.73665 13.7147C2.11883 13.0485 2.06103 12.0457 2.6185 11.3145C3.05443 10.7428 3.80513 9.84641 4.83105 8.95209L6.24907 10.3701C5.35765 11.1309 4.68694 11.911 4.2791 12.436C4.86146 13.0547 5.90058 14.0547 7.23022 14.9099C8.62577 15.8075 10.2703 16.5 12.0003 16.5C12.1235 16.5 12.2463 16.4965 12.3686 16.4896L14.1211 18.2422ZM15.6656 15.544L17.1427 17.0211C17.3881 16.8821 17.6248 16.7383 17.8522 16.592C19.4326 15.5755 20.6332 14.3948 21.2639 13.7147C21.8817 13.0485 21.9395 12.0457 21.3821 11.3145C20.809 10.563 19.6922 9.25059 18.1213 8.1192C16.5493 6.98702 14.4708 6 12.0003 6C10.229 6 8.65936 6.50733 7.33335 7.21175L8.82719 8.70559C9.78572 8.27526 10.8489 8 12.0003 8C13.9223 8 15.5986 8.76704 16.9524 9.7421C18.2471 10.6745 19.1995 11.7641 19.7215 12.436C19.1391 13.0547 18.1 14.0547 16.7703 14.9099C16.4172 15.137 16.0481 15.3511 15.6656 15.544Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M4 5L19 20"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {item?.icon && (
                <svg
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                  stroke="#ffffff"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        className="fill-white"
                        d="M233.449,111.887l-142.5,26.344c-4.922,0.953-28.547,5.359-42.828,30.344c-2.5,4.359-29.453,58-29.453,58 l33.016,20.516l33.906-41.047l41.531,29.047L233.449,111.887z"
                      ></path>{" "}
                      <path
                        className="fill-white"
                        d="M400.839,279.262l-26.344,142.5c-0.953,4.922-5.375,28.563-30.344,42.844 c-4.359,2.484-58.016,29.438-58.016,29.438l-20.516-33.016l41.047-33.906l-29.047-41.532L400.839,279.262z"
                      ></path>{" "}
                      <path
                        className="fill-white"
                        d="M155.777,259.622l-7.531,8.531c-9.188,11.344-8.328,27.813,2.016,38.141l56.172,56.172 c10.328,10.344,26.781,11.203,38.141,2.016l8.531-7.531L155.777,259.622z"
                      ></path>{" "}
                      <path
                        className="fill-white"
                        d="M495.512,17.215c-52.344-52.344-166.875,31.234-220.407,92.797L164.839,235.325l112.563,112.563 l125.313-110.281C464.277,184.075,547.855,69.543,495.512,17.215z M265.292,247.418c-12.203-12.188-12.203-31.953,0-44.156 c12.188-12.203,31.969-12.203,44.156,0c12.203,12.203,12.203,31.969,0.016,44.156C297.261,259.622,277.48,259.622,265.292,247.418z M349.605,163.106c-17.375-17.375-17.375-45.531,0.016-62.891c17.359-17.391,45.531-17.391,62.891-0.016 c17.375,17.375,17.375,45.531,0,62.906C395.152,180.481,366.98,180.481,349.605,163.106z"
                      ></path>{" "}
                      <path
                        className="fill-white"
                        d="M164.808,464.356l32.594-82.157l-18.891-18.875l-17.266,32.734l-8.938-17.859l-32.563,12.047l16.953-33.031 l-17.844-8.922l28.734-15.891l-18.469-18.484c-17.406,9.391-79.234,32.484-79.234,32.484c-0.484,0.188-0.797,0.625-0.828,1.125 c-0.047,0.516,0.203,0.984,0.625,1.25l31.516,19.391c0.594,0.375,0.813,1.125,0.5,1.75l-45.016,44.047 c-0.25,0.5,1.172,2.047,1.688,1.859l30.859,4.828l-69.234,69.234l21.422,21.391l82.25-82.25l0.016,35.625 c0,0.547,0.313,1.031,0.828,1.25c0.5,0.203,1.063,0.094,1.453-0.281l31.438-31.438c0.266-0.281,0.641-0.422,1.047-0.391 c0.391,0.016,0.734,0.203,0.969,0.516l23.078,30.359c0.281,0.391,0.75,0.578,1.234,0.516 C164.23,465.106,164.621,464.794,164.808,464.356z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              )}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  variant,
  children,
}: {
  className?: string;
  variant?: string;
  children: React.ReactNode;
}) => {
  let color = "bg-black";
  if(variant == "booking"){
    color = "bg-green-600";
  }
  return (
    <div
      className={cn(
        `rounded-2xl h-full w-full p-4 overflow-hidden ${color} border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20`,
        className
      )}
    >
      <div className="z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-6", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  variant,
  children,
}: {
  className?: string;
  variant? : string;
  children: React.ReactNode;
}) => {
  let textColor = "text-zinc-400";
  if (variant == "booking") {
    textColor = "text-white";
  }
  return (
    <p
      className={cn(
        `mt-6 ${textColor} tracking-wide leading-relaxed text-sm pb-3`,
        className
      )}
    >
      {children}
    </p>
  );
};
