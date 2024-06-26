import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "./input.css";
import {
  MdOpenInNew,
  MdArrowRightAlt

} from "react-icons/md";

export default function App() {
  const [mobileView, setMobileView] = useState(
    window.innerWidth > 1200 ? true : false
  );
  const designStuff = [
    {
      title: "Van Gogh Inspired Hands",
      subtitle: "Chalk Pastel",
      link: "https://www.instagram.com/p/B_aifC3Fele/",
      img: "https://imgur.com/P1JSSlv.jpg",
    },
    {
      title: "High on Self-Esteem",
      subtitle: "Photoshop",
      link: "https://www.instagram.com/p/CjVkAY7uKDE/",
      img: "https://imgur.com/jkpRzD3.jpg",
    },
    {
      title: "Kestrel",
      subtitle: "Figma",
      link: "https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/Kestrel%20Final.svg",
      img: "https://i.imgur.com/hbm5Ovk.png",
    },
    {
      title: "Metaworld",
      subtitle: "Figma",
      link: "https://farama.org/projects",
      img: "https://i.imgur.com/gBQfHGc.png",
    },
    {
      title: "Fishy Illustration",
      subtitle: "Gouache + Colored Pencil",
      link: "https://www.instagram.com/p/CYHfSGgF5SO/",
      img: "https://imgur.com/Q4T5eU2.jpg",
    },
    {
      title: "Funny UI - GenZ Zoom Feature",
      subtitle: "Figma",
      link: "https://www.linkedin.com/posts/racheltaskale_10xgrowth-impact-startup-activity-7063561214085279744-x_m6?utm_source=share&utm_medium=member_desktop",
      img: "https://i.imgur.com/U1HrxwC.png",
    },
    {
      title: "Funny UI - Spotify X BetterHelp",
      subtitle: "Figma",
      link: "https://www.linkedin.com/posts/racheltaskale_hypemusiconly-mentalhealthawareness-partnership-activity-7069488582373048320-TLvC?utm_source=share&utm_medium=member_desktop",
      img: "https://imgur.com/bKWsZ7H.jpg",
    },
    {
      title: "Pixel Cactus I",
      subtitle: "Procreate",
      link: "",
      img: "https://imgur.com/8rvqIcj.jpg",
    },
    {
      title: "Pixel Cactus II",
      subtitle: "Procreate",
      link: "",
      img: "https://imgur.com/aGI1uIK.jpg",
    },
  ];

  const softwareStuff = [
    {
      title: "Traffic Replay",
      description: "Optimized reconciliation reporting with AWS Lambda and enhanced concurrency. Scaled our capacity to examine mainframe-cloud disparities in trade enrichment from 48,000 to 10 million messages while maintaing report generation under an hour.",
      link_tag: <div className="font-bold h-fit w-fit px-4 py-2 header rounded-sm border-4 lg:border-2 border-background">AWS + Kafka</div>,
      img: "traffic-replay-pattern",
      mode: "bg-t-secondary text-background"
    },
    {
      title: "ConnectJew",
      description: "Developed web application for nonprofit to crowdsource and display all Jewish Community events for the DC, Maryland, and Virginia area.",
      link_tag: <a className="font-bold h-fit w-fit px-4 py-2 header rounded-sm border-4 lg:border-2
      border-t-secondary hover:bg-t-secondary hover:text-background" href="https://connectjew.org" target="_blank">Website</a>,
      img: "connect-jew-pattern",
      mode: "text-t-secondary"
    },
    {
      title: "Women Investors",
      description: "Business case for Wealth Management to support women investors through competitive analysis, gap analysis, internal stakeholder & client interviews, and product development.",
      link_tag: <div className="h-fit w-fit px-4 py-2 header rounded-sm font-bold border-4 lg:border-2 border-background">Figma + Product Design</div>,
      img: "women-investors-pattern",
      mode: "bg-t-secondary text-background"
    },
    {
      title: "Tree Identification",
      description: "Brooklyn native tree image classifier using custom pytorch functions in place of BatchNorm2D, Conv2D, MaxPooling2D, and ReLU.",
      link_tag: <a className="font-bold h-fit w-fit px-4 py-2 header rounded-sm border-4 lg:border-2 
      border-t-secondary hover:bg-t-secondary hover:text-background"
        href="https://github.com/rachel-taskale/TreeClassifier"
        target="_blank">Github</a>,
      img: "tree-pattern",
      mode: "text-t-secondary"
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth > 1200 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App bg-background pb-40 px-10 pt-10 lg:px-24 2xl:px-40 ">
      <div className="w-full flex place-content-end">
        <a className="font-bold h-fit w-fit px-4 py-2 header rounded-sm text-4xl lg:text-2xl items-center
            hover:bg-t-secondary hover:text-background flex text-t-secondary"
          href="https://docs.google.com/document/d/1lrs6NtBp28DJeWjRg3X2ZvDaU9CjjJ3CYRKNe66S8sI/edit?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div className="space-y-80 lg:space-y-56 2xl:space-y-80 ">
        <div className="w-full pt-40 lg:pt-14 space-y-40 mb-24">
          <div className="w-full mb-20 flex place-content-center">
            <img className="" src="/profileDrawing.svg" alt="Profile Drawing" />
          </div>
          <div className="lg:grid lg:grid-cols-4">
            <div className="header text-t-primary text-6xl lg:text-4xl  col-span-3 leading-relaxed 4xl:leading-loose">
              Rachel Taskale is an engineer & designer based in Brooklyn, NY.{" "}
              <span className="text-t-secondary">
                Her goal is to build a more equitable and creative future. In her
                free time, you can find her wandering through New York City and
                drawing.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 lg:gap-10 2xl:gap-20">
          <div className="header w-full text-t-primary text-6xl flex place-content-center lg:items-center leading-relaxed lg:w-72 lg:h-80 lg:text-4xl">
            <div >Creative Projects</div>
          </div>

          {designStuff.map((item) => (
            <div className="image-container">
              <img
                className="w-72 h-80 rounded-md object-cover"
                src={item.img}
              />
              <div className="overlay text-t-primary rounded-md px-4 place-content-center h-full w-full">
                {item.link !== "" ? <a className="flex place-content-end text-2xl" href={item.link} target="_blank">
                  <MdOpenInNew className="absolute right-2 top-2" />
                </a> : null
                }
                <div className="space-y-10">
                  <p className="header text-4xl">{item.title}</p>
                  <p className="subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full flex place-content-end text-t-secondary">
            <a className="font-bold h-fit w-fit px-4 py-2 header rounded-sm border-t-secondary text-4xl lg:text-2xl items-center
            hover:bg-t-secondary hover:text-background flex "
              href="https://instagram.com/art_by_task" target="_blank">
              <div className="">Art Instagram</div>
              <MdArrowRightAlt className="h-full text-4xl lg:text-2xl" />
            </a>

          </div>
        </div>

        <div>
          <div className="flex justify-center py-8">
            <div className="text-t-primary mb-10 header text-6xl lg:text-4xl">
              Software Projects
            </div>
          </div>
          <div className="space-y-20">
            {softwareStuff.map((item) => (
              <div className={`${item.mode} inline-block py-20 lg:py-64 px-20 lg:flex lg:grid lg:grid-cols-3 gap-8 rounded-lg`}>
                <div className="w-full flex justify-center scale-1.5 pb-20 lg:pb-0">
                  <div className={`${item.img} scale-1.5  w-72 h-80 rounded-md bg-background`} />
                </div>
                <div className="inline space-y-20 lg:space-y-0 lg:col-span-2 px-20 justify-center items-center flex justify-center">
                  <div className="space-y-20 lg:space-y-8">
                    <div className="header leading-relaxed text-6xl lg:text-4xl">
                      {item.title}
                    </div>
                    <div className="subtitle text-4xl lg:text-lg leading-relaxed">
                      {item.description}
                    </div>
                    <div className="w-full flex text-4xl lg:text-lg place-content-end">
                      {item.link_tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
