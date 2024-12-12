import { motion } from "motion/react";
import { forwardRef } from "react";
import Iamge from '../assets/us.png'

interface cardProps {
  url: string;
  text: string;
}

const CardComponent = forwardRef(({ text, url }: cardProps, ref) => {
  return (
    <motion.div
      className=" h-[100dvh] ring flex items-center justify-center snap-center divide-y "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-[30em] overflow-hidden  p-2  text-thauane-pink text-center font-poppins font-semibold">
        <img className="w-full h-1/2 bg-cover rounded-md object-cover object-center" src={Iamge.src} alt="" />
        <div className="py-2">◇</div>
        <p className="h-full">
          Teste Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Deleniti quaerat est itaque sapiente eos ex explicabo ducimus impedit
          iste quia? Adipisci quasi recusandae sint cumque deleniti neque
          praesentium laboriosam accusantium!
        </p>
      </div>
    </motion.div>
  );
});

export default CardComponent;
