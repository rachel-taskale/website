import * as React from "react";
import { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
// import ScrollHighlightNabbar from "./navbar/navbar";
import "./input.css";
import {
  MdLocalPhone,
  MdEmail,
  MdOutlineAccountTree,
  MdAccountTree,
  MdFileCopy,
  MdOutlineSmartphone,
  MdOutlineWoman2,
  MdOpenInNew,
} from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

import { FaLinkedinIn } from "react-icons/fa";
import { get } from "jquery";

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
      title: "Fish Illustration",
      subtitle: "Gouache + Colored Pencil",
      link: "https://www.instagram.com/p/CYHfSGgF5SO/",
      img: "https://imgur.com/Q4T5eU2.jpg",
    },
    {
      title: "GenZ Zoom Feature",
      subtitle: "Figma",
      link: "https://www.linkedin.com/posts/racheltaskale_10xgrowth-impact-startup-activity-7063561214085279744-x_m6?utm_source=share&utm_medium=member_desktop",
      img: "https://i.imgur.com/U1HrxwC.png",
    },
    {
      title: "Spotify X BetterHelp",
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
      title:"Traffic Replay",
      description:"Optimized reconciliation reporting with AWS Lambda and enhanced concurrency. Scaled our capacity to examine mainframe-cloud disparities in trade enrichment from 48,000 to 10 million messages while maintaing report generation under an hour",
      link_tag:<div className="font-bold h-fit w-fit px-4 py-2 subtitle rounded-sm border-2 border-background">AWS + Kafka</div>,
      version:"light"
    },
    {
      title:"ConnectJew",
      description:"Developed web application for nonprofit to crowdsource and display all Jewish Community events for the DC, Maryland, and Virginia area.",
      link_tag:<a className="font-bold h-fit w-fit px-4 py-2 subtitle rounded-sm border-2 
      border-t-secondary hover:bg-t-secondary hover:text-background" href="https://connectjew.org" target="_blank">Website</a>,
      version:"dark"
    },
    {
      title:"Women Investors",
      description:"Business case for Wealth Management to support women investors through competitive analysis, gap analysis, internal stakeholder & client interviews, and product development.",
      link_tag:<div className="h-fit w-fit px-4 py-2 subtitle rounded-sm font-bold border-2 border-background">Figma + Product Design</div>,
      version:"light"
    },
    {
      title:"Tree Identification",
      description:"Brooklyn native tree image classifier using custom pytorch functions in place of BatchNorm2D, Conv2D, MaxPooling2D, and ReLU",
      link_tag:<a className="font-bold h-fit w-fit px-4 py-2 subtitle rounded-sm border-2 
      border-t-secondary hover:bg-t-secondary hover:text-background"
      href="https://github.com/rachel-taskale/TreeClassifier"
      target="_blank">Github</a>,
      version:"dark"
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth > 1200 ? true : false);
      console.log(mobileView);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App bg-background pt-10 pb-40 px-24 ">
      <div className="w-full flex place-content-end">
        <button className="col-span-1 justify-self-end font-bold border-2 border-t-secondary 
                            text-t-secondary h-fit w-fit px-4 py-2 subtitle rounded-sm">
          RESUME
        </button>
      </div>
      <div className="space-y-56 pt-32 2xl:pt-80">
        <div className="grid grid-cols-4">
          <div className="header text-t-primary text-4xl 2xl:text-5xl col-span-3 leading-relaxed 4xl:leading-loose">
            Rachel Taskale is an engineer & designer based in Brooklyn, NY.{" "}
            <span className="text-t-secondary">
              Her goal is to build a more equitable and creative future. In her
              free time, you can find her wandering through New York City and
              drawing.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          <div className="header w-56 h-64 text-t-primary text-4xl flex items-center leading-relaxed">
            <div>Creative Projects</div>
          </div>
          {designStuff.map((item) => (
            <div className="image-container">
              <img
                className="w-56 h-64 rounded-md object-cover"
                src={item.img}
              />
              <div className="overlay text-t-primary rounded-md px-4 place-content-center h-full w-full">
              {item.link!=="" ? <a className="flex place-content-end text-2xl" href={item.link} target="_blank">
                  <MdOpenInNew className="absolute right-2 top-2" />
                </a>: null
                }
                <div className="space-y-10">
                  <p className="header text-4xl">{item.title}</p>
                  <p className="subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-center py-8">
            <div className="text-t-primary header text-4xl">
              Software Projects
            </div>
          </div>
          <div className="space-y-40">
            {softwareStuff.map((item)=>(
              item.version === 'light' ? 
              <div className="bg-t-secondary inline-block p-20 lg:flex lg:grid lg:grid-cols-3 gap-8">
              <div className="w-full flex justify-center pb-20 lg:pb-0">
              <div className="w-56 h-64 rounded-md lg:col-span-1 bg-background"></div>
              </div>
              <div className="lg:col-span-2 space-y-8 px-20 w-full">
                <div className="text-background header leading-relaxed text-4xl">
                  {item.title}
                </div>
                <div className="subtitle text-background leading-relaxed">
                  {item.description}
                </div>
                <div className="w-full flex place-content-end">
                  {item.link_tag}
                </div>
              </div>
            </div>
            :
            <div className="bg-background text-t-secondary inline-block p-20 lg:flex lg:grid lg:grid-cols-3 gap-8">
            <div className="w-full flex justify-center pb-20 lg:pb-0">
              <div className="w-56 h-64 rounded-md lg:col-span-1 bg-t-secondary"></div>
              </div>
              <div className="lg:col-span-2 space-y-8 px-20">
                <div className=" header leading-relaxed text-4xl">
                  {item.title}
                </div>
                <div className="subtitle leading-relaxed">
                  {item.description}
                </div>
                <div className="w-full flex place-content-end">
                  {item.link_tag}
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
