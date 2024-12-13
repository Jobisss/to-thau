import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Card from "../components/CardComponent"
import Us from '../assets/us.png'


const Timeline = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      container: divRef,
    });
    const scaleX = useSpring(scrollYProgress);
  
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Barra de progresso fixa */}
        <motion.div
          style={{ scaleX }}
          className="h-2 w-full fixed top-0 left-0 bg-thauane-pink origin-left"
        ></motion.div>
  
        {/* Área de scroll */}
        <div
          ref={divRef}
          className="w-full h-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
        >
          <div className="flex flex-col items-center p-2 pt-32">
            {[...Array(14)].map((_, index) => (
              <div  key={index} className="relative">
                <Card url={Us.src} date="23/12/23" ref={divRef} text="Mensagem eior e bonita s coisas legais" />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    );
  }

export default Timeline