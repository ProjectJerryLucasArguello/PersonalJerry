import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//components & ui
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import TypingAnimation from "@/components/ui/TypingAnimation";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/**text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              {/**Replace Software Engineer with typewritter affect */}
              <span className="text-2xl">
                <TypingAnimation/>
              </span>
              <h1 className="h1">
                Hello, My name is <br /> <span className="text-accent">Jerry Arguello</span>
              </h1>
              
              <p className="max-w-[500px] mb-9 mt-6 text-white/80 text-lg text-center">
                I am proficient in creating unique digital experience that can benefit users,
                and versetile in using various programming languages and tech stacks
              </p>
              {/**btn and socials 1.Need to link resume*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>
                    <a href="/assets/JerryArguello.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        Download CV
                    </a>
                  </span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials 
                    containerStyles="flex gap-6" 
                    iconStyles="w-9 h-9 border border-accent rounded-full flex 
                    justify-center items-center text-accent text-base 
                    hover:bg-accent hover: text-primary hover:transition-all duration-500
                  "/>
                </div>
              </div>
            </div>
            {/**photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home
