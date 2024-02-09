import * as React from "react";
import { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./input.css";
import {
  MdLocalPhone,
  MdEmail,
  MdOutlineAccountTree,
  MdAccountTree,
  MdFileCopy,
  MdOutlineSmartphone,
  MdOutlineWoman2,
} from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { get } from "jquery";

// src="https://drive.google.com/uc?id=1WcJD2DoD9VgDgXg4_BEWHvBCNp28BOt1"
// I work as a Software Engineer at Broadridge Financial Solutions.
// In my free time, I enjoy drawing with my set of prismacolor
// colored pencils, exploring NYC, and hanging out with friends.
// </div>
const DynamicImage = ({ link1, link2, styling }) => {
  const [image, setImage] = useState(link1);
  return (
    <img
      className={styling}
      src={image}
      onMouseEnter={() => setImage(link2)}
      onMouseOut={() => setImage(link1)}
    />
  );
};

const Reel = () => {
  return (
    <div className="ticker-wrap header font-bold h-fit w-full py-2 bg-pink-highlight text-background text-6xl lg:text-2xl">
      <div className="ticker">
        <span className="item-collection-1">
          <span className="item">Check out my instagram: @art_by_task</span>
          <span className="item">Check out my instagram: @art_by_task</span>
          <span className="item">Check out my instagram: @art_by_task</span>
          <span className="item">Check out my instagram: @art_by_task</span>
        </span>
        <span className="item-collection-2">
          <span className="item">Check out my instagram: @art_by_task</span>
          <span className="item">Check out my instagram: @art_by_task</span>
          <span className="item">Check out my instagram: @art_by_task</span>
          <span className="item">Check out my instagram: @art_by_task</span>
        </span>
      </div>
    </div>
  );
};

const Card = ({ title, url }) => {
  return (
    <div className="bg-dark-100 w-full h-fit p-8 rounded-lg flex flex-wrap space-y-20 lg:grid justify-items-center 2xl:p-16">
      <img className="w-full lg:h-fit rounded-md opacity-80" src={url} />
      <div className="header text-6xl lg:text-2xl 2xl:text-4xl text-t-primary w-full flex justify-end">
        <div
          className="lg:w-60 text-right"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, icon, url }) => {
  return (
    <div className="w-full h-fit space-y-16 p-10 lg:space-y-10 lg:py-16 lg:px-10 bg-dark-100 rounded-lg">
      <div className="flex lg:noflex items-center space-x-10">
        {icon}
        <div className="text-6xl lg:text-2xl 2xl:text-4xl header text-t-primary">
          {title}
        </div>
      </div>
      <div className="w-full place-content-end grid">
        <div className=" text-3xl justify-items-right subtitle text-t-secondary lg:w-96 lg:text-base 2xl:text-xl 2xl:w-600">
          {description}
        </div>
      </div>
      <div className="w-full flex justify-end">
      <button className="bg-t-primary header p-4 rounded-xl text-3xl lg:rounded-2xl lg:p-2 lg:text-base">Github</button>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return( 
  <div className="flex relative">

    <img className="translate-x-16 translate-y-6 rounded-lg h-80 w-fit abolute top-0 left-0" src="https://i.imgur.com/fqcHcuo.jpg"/>
    <div className="rounded-lg bg-dark-100 pl-24 h-96 w-full p-10">
      <div className="text-6xl lg:text-2xl 2xl:text-4xl header text-t-primary text-right">About Me</div>
      <div></div>
    </div>

  </div>);
};

const IconInfo = ({ url, bool }) => {
  return <div>{bool ? <div>{url}</div> : <></>}</div>;
};

function getWindowDimensions(){
  const {innerWidth:width, innerHeight:height} = window;
  return{
    width, height
  }
}





const NavBar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [mobileView, setMobileView] = useState(false);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  useEffect(() => {


    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeStyle = "text-red";

  return (
    <div
      className=" text-left rounded-lg items-center lg:w-64 p-6 lg:p-4 lg:space-y-6 "
      // style={{ height: "100rem" }}
    >
      <div className="space-y-10">
      <div className="flex flex-wrap justify-center lg:justify-start lg:pl-2  ">
        <img
          className="h-96 lg:h-40"
          src="https://i.imgur.com/Zq8a783.png"
          title="source: imgur.com"
        />
      </div>
      <div className="space-y-4">
        <div className="header text-8xl lg:text-2xl 2xl:text-4xl text-t-primary">
          Rachel Taskale
        </div>
        <div className="subtitle text-4xl lg:text-base text-t-primary">
          Designer & Engineer based in Brooklyn, NY
        </div>
        <div className="flex justify-between header text-t-secondary space-x-20 text-5xl lg:space-x-0 lg:grid lg:grid-rows-3 lg:text-lg ">
        <AnchorLink
          href="#design"
          className={activeSection === "design" ? activeStyle : {}}
        >
          <div>Design</div>
        </AnchorLink>
        <AnchorLink href="#software">
          <div>Software</div>
        </AnchorLink>
        <div>Me</div>
      </div>

      </div>
      </div>



    </div>
  );
};

const ContactBar = () =>{
  const [mobileView, setMobileView] = useState(false);

  return(
    <div className="text-6xl text-t-primary flex lg:mt-96 lg:gap-y-4 lg:text-base">
    <div className="flex gap-x-2">
      <MdLocalPhone />
      <IconInfo url="917-701-2642" bool={mobileView} />
    </div>
    <div className="flex gap-x-2 ">
      <MdEmail />
      <IconInfo url="racheltaskale@gmail.com" bool={mobileView} />
    </div>
    <div className="flex gap-x-2">
      <FaLinkedinIn />
      <IconInfo url="linkedin.com/in/racheltaskale" bool={mobileView} />
    </div>
  </div>


  )
}

const ArtLayout = () => {
  return (
    <div id="design" class="grid w-full gap-x-20 gap-y-40 grid-cols-2 lg:gap-20 2xl:gap-40">
      <div class="grid gap-40 justify-items-center lg:gap-20">
        <Card title="High on Self Esteem" url="https://i.imgur.com/jkpRzD3.jpg" />
        <Card title="Hands" url="https://i.imgur.com/P1JSSlv.png"/>
        <Card title="Fish" url="https://i.imgur.com/0kDxtty.jpg"/>
      </div>
      <div class="grid gap-40 justify-items-center lg:gap-20">
        <Card title="Kestrel" url="https://i.imgur.com/6YopinN.png" />
        <Card title="Spotify X BetterHelp" url="https://i.imgur.com/bKWsZ7H.png"/>
        <Card title="Meeting Stimulation Feature" url="https://i.imgur.com/U1HrxwC.png"/>
      
     
        
      </div>
    </div>
  );
};

const SoftwareLayout = () => {
  return (
    <div id="software" className="grid space-y-64 lg:space-y-72">
      <ProjectCard
        title={"MapReduce"}
        icon={<MdFileCopy className="text-8xl text-t-primary" />}
        description={
          `Optimized reconciliation reporting with AWS Lambda and enhanced concurrency. Scaled our capacity to examine mainframe-cloud disparities in trade enrichment from 48,000 to 10 million messages while maintaing report generation under an hour
          ${<div>
                <ul>
                  <li>Python</li>
                  <li>Machine Learning</li>
                  <li>Neural Networks</li>
                </ul>
            </div>}
            `
        }
      />
      <ProjectCard
        title={"Women Investors"}
        icon={<MdOutlineWoman2 className="text-8xl text-t-primary" />}
        description={
          "Business case for Wealth Management to support women investors through competitive analysis, gap analysis, internal stakeholder & client interviews, and product development."
        }
      />
      <ProjectCard
        title={"Tree Identification"}
        icon={<MdAccountTree className="text-8xl text-t-primary" />}
        description={
          "Brooklyn native tree image classifier using custom pytorch functions in place of BatchNorm2D, Conv2D, MaxPooling2D, and ReLU."
        }
      />
      <ProjectCard
        title={"Reddit to TikTok"}
        icon={<MdOutlineSmartphone className="text-8xl text-t-primary" />}
        description={
          "Created an end to end video generator that pulls posts from subreddits such as r/AmITheAsshole and creates a text to speech video to post to Tiktok."
        }
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="App bg-background ">
      <div className="p-4 mb-20 lg:flex lg:mx-10 2xl:mx-40 3xl:mx-64">
        <div className="lg:fixed h-full">
          <NavBar />
          <div className="bottom-64 lg:bottom-20 2xl:bottom-40">
          <ContactBar/>
          </div>
        </div>
        <div className="lg:w-96 lg:p-4"></div>
        <div className="w-full space-y-96 lg:px-10 2xl:px-20">
          <ArtLayout />
          {/* <Reel/> */}
          <SoftwareLayout />
          <AboutMe/>
        </div>
      </div>

      {/* <Reel /> */}
    </div>
  );
}

// <a
// className="subtitle text-pink-highlight text-right px-12 w-full text-4xl lg:text-xl rounded-3xl"
// href="https://docs.google.com/document/d/1pf0A7l3GzRQkIt5cYGGgvUqScWLdYNOr/edit?usp=sharing&ouid=108643512595099329438&rtpof=true&sd=true"
// >
// Resume
// </a>
