import { motion } from "motion/react";
import { forwardRef } from "react";
import Iamge from '../assets/us.png'
import Image from "astro/components/Image.astro";

interface cardProps {
  url: string;
  text: string;
  date: string;
}

const CardComponent = forwardRef(({ text, url, date }: cardProps, ref) => {
  return (
    <motion.div
      className=" h-[100dvh] flex items-center justify-center snap-center divide-y "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-[30em] overflow-hidden p-2  text-thauane-pink text-center font-poppins font-semibold">
        <p>{date}</p>
        <img loading="lazy" decoding="async" className="w-full h-1/2 bg-cover rounded-md object-cover object-center" src={url} alt="Uma foto minha com a minha namorada" />
        <div className="py-2">◇</div>
        <p className="h-full">
           {text}
        </p>
      </div>
    </motion.div>
  );
});

export default CardComponent;
