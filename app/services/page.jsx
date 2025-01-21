


const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-evenly xl:flex-row">
        <div className="gap-6">
          <h2 className="text-2xl text-center">Langauges</h2>
          <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <p>HTML/CCS</p>
                <p>Javascript</p>
                <p>Python</p>
                <p>Java</p>
                <p>C+</p>
          </div>
        </div>
        <div className=" gap-6">
          <h2 className="text-2xl text-center">FrameWorks</h2>
          <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <p>React.js</p>
                <p>Next.js</p>
                <p>TailwindCSS</p>
                <p>Flask</p>
                <p>Springboot</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;