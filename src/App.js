import * as React from "react";
import { useState } from "react";
import "./input.css";
import { FaInstagram, FaRegEnvelope, FaGithub, FaLinkedinIn, FaAngleLeft, FaAdversal, FaAngleRight, FaInfo } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div className="w-full">
      <div className="w-full subtitle text-md font-bold">About Me</div>
      <hr class=" h-0.5 mb-8 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
      <div className="grid grid-cols-2 items-center">
        {/* <div className="absolute rounded-full ml-5 w-80 h-72 border-8 border-red-highlight"/> */}
        <img
          className="image w-80 h-60 rounded-lg object-cover"
          src="https://drive.google.com/uc?id=1WcJD2DoD9VgDgXg4_BEWHvBCNp28BOt1"
        />

        <div className="grid grid-rows-2">
          <div className="header font-bold text-red-highlight text-xl opacity-100">
            Hi, my name is Rachel!
          </div>
          <div className="body-text text-sm h-fit  content-center opacity-60">
            I work as a Software Engineer at Broadridge Financial Solutions. In
            my free time, I enjoy drawing with my set of prismacolor colored
            pencils, exploring NYC, and hanging out with friends.
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareProjects = () => {
  return (
    <div className="my-10 w-full">
      <div className=" subtitle text-md gap-20 font-bold">
        <div>Software Projects</div>
        {/* <div>Tags</div> */}
      </div>
      <hr class=" h-0.5  mb-8 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
      {/* <div className="grid "> */}
      <div className="grid grid-cols-2 my-1 px-2 rounded-md gap-x-96 items-center pb-6">
        <a className="header text-green-highlight text-xl " href="#" target="_blank">
          Big Data Processing
        </a>
        <div className="grid grid-rows-3 body-text gap-y-1  text-sm h-fit opacity-60">
          <div>AWS</div>
          <div>Java</div>
          <div>Python</div>
        </div>
      </div>

      <hr class=" h-0.5 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50 " />
      <div className="grid grid-cols-2 my-1 px-2 rounded-md gap-x-96 items-center py-6">
        <a className="header text-green-highlight text-xl" href="#" target="_blank">
          Women Investors
        </a>
        <div className="grid grid-rows-3 body-text gap-y-1 text-sm opacity-60">
          <div>Product Design</div>
          <div>Figma</div>
          <div>Business</div>
        </div>
      </div>
      <hr class=" h-0.5 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
      <div className="grid grid-cols-2 my-1 px-2 rounded-md gap-x-96 items-center py-6">
        <a className="header text-green-highlight text-xl" href="https://github.com/rachel-taskale/TreeClassifier" target="_blank">
          Tree Identification
        </a>
        <div className="grid grid-rows-2 body-text text-sm gap-y-1 opacity-60">
          <div>PyTorch</div>
          <div>Deep Learning</div>
        </div>
      </div>

      <hr class=" h-0.5 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
      <div className="grid grid-cols-2  rounded-md px-2 gap-x-96 items-center py-6">
        <a className="header text-green-highlight text-xl" href="https://github.com/rachel-taskale/Reddit_to_Tiktok_Bot" target="_blank">
          Reddit to TikTok
        </a>
        <div className="grid grid-rows-3 body-text text-sm gap-y-1 opacity-60">
          <div>MoviePy</div>
          <div>Automation</div>
          <div>Python</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

const ArtProjects = () => {
  return (
    <div className="my-10 w-full ">
      <div className=" subtitle grid text-md font-bold gap-x-80">
        <div>Design</div>
      </div>
      <hr class=" h-0.5 mb-8 border-t-0 bg-subtitle-blue opacity-100 dark:opacity-50" />
        <div className="grid grid-cols-3 gap-x-4 body-text text-md px-2 ">
          <div>
            <div className="text-orange-highlight header text-xl font-bold  ">
              Logos
            </div>
            <ul className="text-sm leading-loose opacity-60	">
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
            <div className="text-orange-highlight header text-xl font-bold ">
              Art
            </div>
            <div className="text-sm leading-loose opacity-60	">
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
            <div className="text-orange-highlight text-xl header font-bold">
              UI
            </div>
            <ul className="text-sm leading-loose opacity-60	">
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
       <div className="grid grid-cols-4 w-fit gap-x-5 text-right">
          <a href="mailto:racheltaskale@gmail.com"  _target='blank' ><FaRegEnvelope  className='text-blue-highlight'size='1.5rem'/></a>
          <a href="https://github.com/rachel-taskale/"><FaLinkedinIn  className='text-blue-highlight'size='1.5rem'/></a>
          <a href="https://instagram.com/art_by_task" _target='blank'><FaInstagram  className='text-blue-highlight'size='1.5rem'/></a>
          <a href="https://github.com/rachel-taskale/" _target='blank'><FaGithub  className='text-blue-highlight'size='1.5rem'/></a>

          </div>   
      

      
  );
};

const LandingImage = () => {
  return (
    <div class="grid grid-rows-2 grid-cols-6 grid-flow-col gap-4 pb-20 pt-28">
      <div class="col-span-1 row-span-2 bg-red-highlight h-72 rounded-lg" />
      <div class=" col-span-5 row-span-1 grid grid-cols-2  gap-4">
        <div class="col-span-2.5 bg-orange-highlight rounded-lg" />
        <div class="col-span-2.5 bg-blue-highlight rounded-lg" />
      </div>
      <div class="row-span-1 col-span-5 bg-green-highlight rounded-lg" />
    </div>
  );
};

export default function App() {
  const [hide, setHide] = useState(true)
  const changeState = (i) =>{
    setHide(!hide)
  }

  return (
    <div className="App place-items-center w-full">
      <div className="px-28 w-full pb-10">
        <a
          className="header absolute right-28 top-8 pt-2 pr-2 text-xl font-bold"
          href="https://docs.google.com/document/d/1pf0A7l3GzRQkIt5cYGGgvUqScWLdYNOr/edit?usp=sharing&ouid=108643512595099329438&rtpof=true&sd=true"
        >
          Resume
        </a>
        <div>
          <LandingImage className="min-h-80" />
        </div>
        <div className="w-full space-y-48 place-content-between relative">
          <div className="grid grid-cols-2 content-end align-text-bottom ">
            <div className="header text-5xl font-bold">Rachel Taskale</div>
            <div className="subtitle text-sm h-full relative  ">
              <div className="h-fit absolute bottom-0 right-0 font-bold">
                ENGINEER + DESIGNER BASED OUT OF BROOKLYN, NY
              </div>
            </div>
          </div>
          <AboutMe className="w-full" />
          
          <SoftwareProjects className="w-full " />
          <ArtProjects />
         
        </div>
      <div className="flex pt-48 justify-center">
        <div className=" w-fit">
          <Contact />
          </div>
          </div>
      </div>
    </div>
  );
}
