"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { Button } from "./ui/MovingBorders";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full" id="projects">
      <h1 className="heading">
        My <span className="text-purple">recent projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {projects.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="relative flex flex-col items-center justify-between sm:w-[110vw] lg:w-[50vw] w-[140vw] h-[20vh] lg:h-[30vh] p-4">
              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center mb-2">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm text-center mb-4"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des}
              </p>

              <div className="flex w-full justify-between items-center mt-auto">
                <div className="flex items-center gap-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={item.link} // Replace with your actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Code
                  </a>
                  <FaLocationArrow className="ms-1" color="#CBACF9" />
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
