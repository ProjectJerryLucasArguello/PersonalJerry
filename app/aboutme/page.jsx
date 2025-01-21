
//COmponents
import ThreeJSLogoScene from "@/components/ui/ThreeJSLogoScene"

const About = () => {
  return (
    <div className="flex flex-col xl:flex-row h-screen">
      {/**Three.js Scene */}
      <div className=" order-1 xl:order-none xl:w-1/2 h-full w-full">
          <ThreeJSLogoScene />
      </div>
      {/**Text Content */}
      <div className="xl:order-none w-full xl:w-1/2 h-1/2 xl:h-full flex justify-center items-center bg-gray-800 text-white p-8">
        <div className="text-center ">
          <h1 className="text-4xl font-bold "> About Me</h1>
          <div className="max-xl:overflow-y-auto max-h-48">
            <p className="mt-4 text-lg ">
              Currently attending New Jersey Institue of Technology, I am purpusing the field of computer science.
              Vauge description, I know. However, let me say that within this straight foward path of becoming a computer sciencist 
              that it really open up all sorts of possibilites. To me computer science and programming is not just numbers and algorithms,
              but as a way to express creative ideas. Though there are other aveunes I wish to explore I am most interested in both frontend and 
              backend development, also know as a fullstack developer. I not only enjoy being backend developer wether creating APIs and services for users
              but I also enjoy the creative freedom that in which a frontend devloper has access to. Long story short, is I whatever role I am assigned to I wish
              to combine all my pervious knowledge and experiences in order to create an application best suited for my clients!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About