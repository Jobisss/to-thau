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
          <div className="relative">
            <Card url={Us.src} ref={divRef} text="Princesa, hoje é um dia especial." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/rock.jpg' ref={divRef} text="Esse site (coincidentemente) está com a cor das suas unhas!" />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/flores.jpg' ref={divRef} text="O Natal é um momento que não costumava ser especial para mim..." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/amor.jpg' ref={divRef} text="Mas... apareceu uma pessoa que, através dos seus olhos, fez meu mundo tomar outras cores, outras graças e outras aventuras." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative ">
            <Card url='/photos/parque.jpg' ref={divRef} text="Tudo ao seu lado foi tomando rumos e caminhos que jamais imaginei. Desde que te conheço, nenhum dia foi monótono o suficiente para ser chamado de 'só mais um'. Eu posso ser péssimo com datas..." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/rcok2.jpg' ref={divRef} text="Mas não se preocupe, pois o que sinto por ti transcende tudo o que pode ser considerado efêmero, ou seja, aquilo que acaba. Meu amor é um ciclo que se autoalimenta de sua beleza e, logo, é infinito." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/casamento.jpg'  ref={divRef} text="Meu amor é um ciclo que se autoalimenta de sua beleza e, logo, é infinito." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/umAno.jpg' ref={divRef} text="Quando as coisas estão difíceis, quando nada mais faz sentido, sei que é em seus braços que posso me sentir acolhido. Sei que é em seu amor que encontro paz." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/brava.jpg' ref={divRef} text="E nos seus olhos, mesmo que cheios de raiva, é onde encontro tudo o que preciso." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/antes.jpg' ref={divRef} text="De um namorado apaixonado." />
            <hr className="border-none bg-thauane-pink opacity-50" />
          </div>
          <div className="relative">
            <Card url='/photos/mascara.jpg' ref={divRef} text="Cheio de vontade de ser o melhor para você." />
            <hr className="border-none bg-thauane-pink opacity-50 " />
          </div>
          <div className="relative w-full">
            <Card url='/photos/natal.jpg' ref={divRef} text="Feliz Natal! Eu te amo!" />
            <hr className="border-none bg-thauane-pink opacity-50 " />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Timeline