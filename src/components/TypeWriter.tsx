import Typewritera from "typewriter-effect";

const Typewriter = () => {
  return (
    <div className="basis-9/12 shrink-0 overflow-y-auto">
      <p className="text-thauane-pink">
        <Typewritera
          options={{ loop: false, delay: 40 }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString("E como voce ta minha princesa ? ")
              .pauseFor(2500)
              .typeString("Vim aqui porque queria fazer uma linda surpresa. ")
              .pauseFor(2500)
              .typeString("Queria poder te dar um eu te amo, em que voce enfim se sentisse amada.")
              .typeString(' Pensei tanto em o que dizer... acho que de um tempo pra cá tenho sentindo mais vontade de ser eu mesmo, de dizer o que penso, por mais que talvez ')
              .pauseFor(2000)
              .typeString('voce não fosse me entender')
              .pauseFor(2000)
              .deleteChars(46)
              .typeString('. Não devia ter medo de dizer que ainda não sei o motivo, pois existe uma verdade, unica e imutavel, e sei que o que sinto por voce é ')
              .pauseFor(1000)
              .typeString('que te amo mais do que possa escolher as palavras para te dizer oque sinto, que o simples viver ao seu lado é oq me completa, não existe um só motivo que poderia dizer, pois nenhum deles resume oque sinto')
              .changeDeleteSpeed(10)
              .pauseFor(10000)
              .deleteChars(204)
              .changeDeleteSpeed("natural")
              .typeString('que eu te amo grandemente !')
              .typeString('<br></br>')
              .typeString('<br></br>')
              .typeString('<br></br>')
              .typeString('Eu nunca tinha imaginado o amor, não tive expectativas, amei como uma criança, e depois amei voce, me proibia amar até que não me proibi mais, voce abriu as portas do meu coração, me fez sentir a segurança que precisava, acho que encontrei tantas coisas em voce, tantas responstas pra tantas dores e angustias, voce foi a cura da minha alma, eu te amo tanto que seria capaz de ir até o fim do mundo e voltar só pra te provar isso, talvez eu não seja bom com os momentos da forma que voce queria, não atrelo voce só em atitudes, acho que tem o mistico de voce ser algo que procurava e não sabia, um amor veradeiro, algo q eu sentisse de verdade, que eu quisesse, desejasse e que me comprometesse a amar, vejo em voce nada mais e nada menos que a minha propria sede de vida, em quanta haver vida dentro de mim, haverá nós, por isso, desculpa  toda essa bobeira de não conseguir dizer sobre o porque te amo, sem dizer o porque nos amo. Então mesmo que não entenda, mesmo que me doa isso, não desista do meu amor, pois ele é grande demais.')
              .pauseFor(5000)
              .typeString("Voce é a mina luz, a minha vida, eu te amo,")
              .pauseFor(5000)
              .typeString('que eu te amo grandemente !')
              .typeString('<br></br>')
              .typeString('<br></br>')
              .typeString('<br></br>')
              .typeString("Desculpa pelos errros é dificil escrever aqui !")
              .typeString('<br></br>')
              .typeString('De :<span class="font-style text-xl">João Gabriel (Amor da sua vida)</span> Para <span class="font-style text-xl">Thauane (Amor da minha vida)</span>')
              .start();
          }}
        />
      </p>
    </div>
  );
};

export default Typewriter;
