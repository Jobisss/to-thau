import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Card from "../components/CardComponent"


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
          className="w-full h-full overflow-y-scroll snap-y snap-mandatory"
        >
          <div className="flex flex-col items-center p-2 pt-32 w-10/12 ">
            {[...Array(14)].map((_, index) => (
              <div className="relative">
                
                <Card key={index} ref={divRef} text="Teste lorme" url="dsadsa"/>
                <hr className="border-none bg-thauane-pink opacity-50"/>
                <div className="w-16 ring-1  ring-thauane-red absolute -right-16 -z-10 top-1/3">
                  <p className="absolute -top-6 text-xs font-poppins font-semibold text-center w-14">12/23/34</p>
                </div>
              </div>
            ))}
            
          </div>
          <div className="h-full ring-thauane-red ring-1 absolute right-0 top-0">
          </div>
         
        </div>
        
      </div>
    );
  }

export default Timeline