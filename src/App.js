import * as React from "react";
import { useState } from "react";
import "./input.css";
import { IconContext } from "react-icons";
import {
  FaTimes,
  FaInstagram,
  FaRegEnvelope,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";


  const AboutMe = () => {
    return (
      <div className="w-full">
        <div className="w-full subtitle font-bold text-2xl lg:text-sm tracking-wider">
          ABOUT ME
        </div>
        <hr class=" h-0.5 mb-8 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
        <div className="lg:grid lg:grid-cols-2 items-center place-content-center">
          <img
            className="image h-96 lg:h-72 rounded-lg object-cover overflow-y-hidden"
            src="https://drive.google.com/uc?id=1WcJD2DoD9VgDgXg4_BEWHvBCNp28BOt1"
          />

          <div className="lg:grid lg:grid-rows-2">
            <div className="header font-bold text-red-highlight text-3xl pt-12 pb-8 opacity-100 lg:text-xl lg:p-0">
              Hi, my name is Rachel!
            </div>
            <div className="body-text text-2xl lg:text-sm h-fit content-center opacity-60">
              I work as a Software Engineer at Broadridge Financial Solutions.
              In my free time, I enjoy drawing with my set of prismacolor
              colored pencils, exploring NYC, and hanging out with friends.
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SoftwareProjects = () => {
    return (
      <div className="my-10 w-full">
        <div className=" subtitle text-2xl lg:text-sm gap-20 font-bold tracking-wider">
          <div>SOFTWARE PROJECTS</div>
        </div>
        <hr className=" h-0.5  mb-8 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
        <div className="grid lg:grid-cols-2 my-1 px-2 rounded-md lg:gap-x-40 lg:items-center pb-6">
          <p
            className="header text-green-highlight font-bold text-3xl pb-4 lg:text-xl lg:py-10 lg:p-0"
          >
            Big Data Processing
          </p>

          <div className="body-text gap-y-1 text-2xl lg:text-sm h-fit opacity-60">
          Optimized reconciliation reporting with AWS Lambda and enhanced concurrency. Scaled our capacity to examine mainframe-cloud disparities in trade enrichment from 48,000 to 10 million messages while maintaing report generation under an hour.
          </div>
        </div>

        <hr className=" h-0.5 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50 " />
        <div className="grid lg:grid-cols-2 my-1 px-2 rounded-md lg:gap-x-40 lg:items-center py-6">
          <p
            className="header text-green-highlight font-bold text-3xl pb-4 lg:text-xl lg:py-10 lg:p-0"
          >
            Women Investors
          </p>
          <div className=" body-text gap-y-1 text-2xl lg:text-sm h-fit opacity-60">
          Business case for Wealth Management to support women investors through competitive analysis, gap analysis, internal stakeholder & client interviews, and product development.
          </div>
        </div>
        <hr class=" h-0.5 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
        <div className="grid lg:grid-cols-2 my-1 px-2 rounded-md lg:gap-x-40 lg:items-center py-6">
          <a
            className="header text-green-highlight font-bold text-3xl pb-4 lg:text-xl lg:py-10 lg:p-0"
            href="https://github.com/rachel-taskale/TreeClassifier"
            target="_blank"
          >
            Tree Identification
          </a>
          <div className="body-text gap-y-1 text-2xl lg:text-sm h-fit opacity-60">
           Brooklyn native tree image classifier using custom pytorch functions in place of BatchNorm2D, Conv2D, MaxPooling2D, and ReLU.
          </div>
        </div>
        <hr class=" h-0.5 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
        <div className="grid lg:grid-cols-2 my-1 px-2 rounded-md lg:gap-x-40 lg:items-center py-6">
          <a
            className="header text-green-highlight font-bold text-3xl pb-4 lg:text-xl lg:py-10 lg:p-0"
            href="https://github.com/rachel-taskale/Reddit_to_Tiktok_Bot"
            target="_blank"
          >
            Reddit to TikTok
          </a>
          <div className="body-text gap-y-1 text-2xl lg:text-sm h-fit opacity-60">
            Created an end to end video generator that pulls posts from subreddits such as r/AmITheAsshole and creates a text to speech video to post to Tiktok.
           
          </div>
        </div>
      </div>
    );
  };

  const ArtProjects = () => {
    return (
      <div className="my-10 w-full ">
        <div className="subtitle grid text-2xl lg:text-sm font-bold lg:gap-x-80 tracking-wider">
          <div>DESIGN</div>
        </div>
        <hr class=" h-0.5 mb-8 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
        <div className=" flex justify-center justify-between lg:px-2 body-text text-2xl lg:text-sm ">
          <div>
            <div className="text-orange-highlight header text-3xl lg:text-xl font-bold  ">
              Logos
            </div>
            <ul className="  leading-loose opacity-60	">
              <li>
                <a
                  href="https://github.com/rachel-taskale/GraphicDesignWork/blob/main/logos/Kestrel%20Final.svg"
                  target="_blank"
                >
                  Kestrel
                </a>
              </li>
              <li>
                {" "}
                <a href="https://farama.org/projects" target="_blank">
                  Metaworld{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="https://farama.org/projects" target="_blank">
                  MO-Gymnasium{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="https://farama.org/projects" target="_blank">
                  Umshini{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-orange-highlight header text-3xl lg:text-xl font-bold ">
              Art
            </div>
            <div className=" leading-loose opacity-60	">
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://github.com/rachel-taskale/GraphicDesignWork/blob/main/art/Vicious%20Summer%20faces.png"
                    target="_blank"
                  >
                    High on Self-Esteem{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/rachel-taskale/GraphicDesignWork/blob/main/art/Vicious%20Summer%20skull.png"
                    target="_blank"
                  >
                    Broken Record Love
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-orange-highlight text-3xl lg:text-xl header font-bold">
              UI
            </div>
            <ul className="leading-loose opacity-60	">
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/posts/racheltaskale_hypemusiconly-mentalhealthawareness-partnership-activity-7069488582373048320-TLvC?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  Spotify X BetterHelp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/posts/racheltaskale_nextbigthing-venmo-startup-activity-7069787130260070400-QanP?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  Venmo Payback Rate{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/posts/racheltaskale_10xgrowth-impact-startup-activity-7063561214085279744-x_m6?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                >
                  GenZ Meeting Stimulator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div className="flex justify-center gap-x-16 w-full lg:w-fit lg:gap-x-5 text-right">
        <a href="mailto:racheltaskale@gmail.com" _target="blank">
          <FaRegEnvelope className="text-blue-highlight text-5xl lg:text-2xl" />
        </a>
        <a href="https://github.com/rachel-taskale/">
          <FaLinkedinIn className="text-blue-highlight text-5xl lg:text-2xl" />
        </a>
        <a href="https://instagram.com/art_by_task" _target="blank">
          <FaInstagram className="text-blue-highlight text-5xl lg:text-2xl" />
        </a>
        <a href="https://github.com/rachel-taskale/" _target="blank">
          <FaGithub className="text-blue-highlight text-5xl lg:text-2xl" />
        </a>
      </div>
    );
  };

  const DynamicImage = ({link1, link2, styling}) =>{
    const[image, setImage] = useState(link1)
    return(
      <img
          className={styling}
            
            src={image}
            onMouseEnter={() => setImage(link2)}
            onMouseOut={() => setImage(link1)}
          />
    )

  }

  const LandingImage = () => {
    return (
      <div class="grid grid-rows-2 grid-cols-6 grid-flow-col gap-4 pb-40 pt-48 lg:pb-20 lg:pt-28">
        <div class="col-span-1 row-span-2 bg-red-highlight h-72 rounded-lg items-center">
          <DynamicImage styling={"object-cover h-60 mt-4 opacity-0 lg:opacity-100"} link1={"https://drive.google.com/uc?export=view&id=1NkQEXH7P1bw4ZP8Fs5nthnYn_bRWSRj3"} link2={"https://drive.google.com/uc?export=view&id=1EqLVpmwJKEMAlLSnA9RJhawrkMEDf006"}/>
        </div>
        <div class=" col-span-5 row-span-1 grid grid-cols-2 gap-4">
          
          <div class="col-span-2.5 bg-orange-highlight rounded-lg">
         
            <DynamicImage styling={"opacity-0 lg:opacity-100"} link1={"https://drive.google.com/uc?export=view&id=1h32WbzMZ7Tq23_5HeME-YSAMnJnV1FCT"} link2={"https://drive.google.com/uc?export=view&id=11fE8ua6qpO55Rd_jCajLFggjjUze_Y6u"}/>
        
          </div>
          <div class="col-span-2.5 bg-blue-highlight rounded-lg">
            <DynamicImage styling={"opacity-0 lg:opacity-100"} link1={'https://drive.google.com/uc?export=view&id=1vsKi_5AtGDzJoYOJxQi59d-2-LJTGY8E'} link2={'https://drive.google.com/uc?export=view&id=1D0KlOjquxPpPtjjKU6hro96XYMCPqqqH'}/>

          </div>
        </div>
        <div class="row-span-1 col-span-5 bg-green-highlight rounded-lg">
          {/* <DynamicImage styling={"opacity-0 lg:opacity-100 max-h-20"} link1={'https://drive.google.com/uc?export=view&id=1vCq2v47lmWY0vK1vT2pxxIZw9y5aCo9P'} link2={'https://drive.google.com/uc?export=view&id=1zMUqeZ1ZPQZ8F5F9QHoqAMopDBIisDhh'}/> */}
        </div>
      </div>
    );
  };

  export default function App() {

  return (
    <div className="App place-items-center w-full">
      <div className="px-12 lg:px-28 w-full pb-10">
        <a
          className="header absolute right-28 top-16 pt-2 pr-2 text-3xl font-bold lg:top-8 lg:text-xl"
          href="https://docs.google.com/document/d/1pf0A7l3GzRQkIt5cYGGgvUqScWLdYNOr/edit?usp=sharing&ouid=108643512595099329438&rtpof=true&sd=true"
        >
          Resume
        </a>
        <div>
          <LandingImage className="min-h-80" />
        </div>
        <div className="w-full space-y-56 place-content-between relative ">
          <div className="lg:grid lg:grid-cols-2 content-end align-text-bottom ">
            <div className="header text-6xl lg:text-6xl font-bold">
              Rachel Taskale
            </div>
            <div className="subtitle tracking-wider h-full relative text-2xl lg:text-sm">
              <div className="h-fit pt-4 font-bold lg:pt-0 lg:absolute lg:bottom-0 lg:right-0 ">
                ENGINEER + DESIGNER BASED OUT OF BROOKLYN, NY
              </div>
            </div>
          </div>
          <AboutMe className="w-full" />
          <SoftwareProjects className="w-full " />
          <ArtProjects />
        </div>
        <div className="flex pt-48 justify-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}
