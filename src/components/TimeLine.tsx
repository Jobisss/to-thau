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
                <Card url={Us.src} date="27/10/24" ref={divRef} text="Princesa, hoje é um dia especial." />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/rock.jpg' date="27/10/24" ref={divRef} text="Esse site (conhecidentemente) esta com a cor das suas unhas !" />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/flores.jpg' date="27/10/24" ref={divRef} text="O natal é um momento em que não costumava ser especial para mim..." />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/amor.jpg' date="27/10/24" ref={divRef} text="Mas... pareceu uma pessoa, que atravez dos seus olhos, o meu mundo tomou outras cores, outras graças e outras aventuras" />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/parque.jpg' date="27/10/24" ref={divRef} text="Tudo ao seu lado foi tomando rumos e caminhos que jamais imaginei, desde que conheço você nenhum dia foi monotono o suficiente pra ser chamado de só mais um. Eu posso ser péssimo com datas.." />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/rcok2.jpg' date="27/10/24" ref={divRef} text="Mas não se preocupe, pois o que sinto por ti transcende tudo que pode ser considerado efemero, ou seja aquilo que acaba. meu amor é um ciclo em que se auto alimente de sua beleza, logo, é infinita" />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/casamento.jpg' date="27/10/24" ref={divRef} text="Meu amor é um ciclo em que se auto alimenta de sua beleza, logo, é infinita. " />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/umAno.jpg' date="27/10/24" ref={divRef} text="Quando as coisas estão dificeis, quando nada mais faz sentido sei que é em seus braços que posso me sentir acolhido, sei que é em seu amor q é encontro paz" />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/brava.jpg' date="27/10/24" ref={divRef} text="E nos seus olhos, mesmos que cheios de raiva, é onde encontro tudo o que preciso for preciso." />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/antes.jpg' date="27/10/24" ref={divRef} text="De um namorado apaixonado" />
                <hr className="border-none bg-thauane-pink opacity-50"/>
              </div>
              <div className="relative">
                <Card url='/photos/mascara.jpg' date="27/10/24" ref={divRef} text="Cheio de vontade de te ser o melhor pra ti." />
                <hr className="border-none bg-thauane-pink opacity-50 "/>
              </div>
              <div className="relative w-full">
                <Card url='/photos/natal.jpg' date="27/10/24" ref={divRef} text="Feliz natal, eu te amo !" />
                <hr className="border-none bg-thauane-pink opacity-50 "/>
              </div>
            
          </div>
        </div>
        
      </div>
    );
  }

export default Timeline