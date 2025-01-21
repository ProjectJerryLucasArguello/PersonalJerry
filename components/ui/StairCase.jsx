import {animate, motion} from "framer-motion"

//Variation
const stairAnimation = {
    initial: {
        top: "0%", //Initally we start at the top of the container (On entry in homepage)
    },
    animate: {
        top: "100%", //The animation ends with reaching the bottom of the container (On entry in homepage)
    },
    exit: {
        top: ["100%","0%"], //Reverses the drop down going now bottom to top (On exit to another page on the website)
    },
};

//Calulcations for reversing the index for that staggered delay
const reversal = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1; //Reverses the order of bars so index = 0 will return n - 1 && index  = n will return 0 
}

const StairCase = () => {
  return (
    <>
        {/**I want 6 motion bars represented as divs,
         * Each div will have the same animation set by the starisAnimation object,
         * Delay for each div calulcalted dinamically based on it's reversed index
         * creating a staggering effect w decrease of delay for each subsequent step.
         */}
        {[...Array(6)].map((_, index) => {
            return(
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial = "initial"
                    animate = "animate"
                    exit = "exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reversal(index) * 0.1
                    }}
                    
                    className="h-full w-full bg-cyan-300 relative"
                />
            )
        })}
    </>
    
  )
}

export default StairCase;