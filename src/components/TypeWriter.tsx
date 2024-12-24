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
              .typeString("E como você está, minha princesa?")
              .pauseFor(2500)
              .typeString("Vim aqui porque queria fazer uma linda surpresa.")
              .pauseFor(2500)
              .typeString(" Queria poder te dar um 'eu te amo' que fizesse você se sentir profundamente amada.")
              .typeString(" Pensei tanto no que dizer... Acho que, de um tempo pra cá, tenho sentido mais vontade de ser eu mesmo, de dizer o que penso, mesmo que talvez ")
              .pauseFor(2000)
              .typeString("você não fosse me entender.")
              .pauseFor(2000)
              .deleteChars(42)
              .typeString(". Não devia ter medo de dizer que ainda não sei o motivo, porque existe uma verdade única e imutável: sei que o que sinto por você é ")
              .pauseFor(1000)
              .typeString("que te amo mais do que consigo encontrar palavras para expressar. O simples fato de viver ao seu lado é o que me completa. Não há um só motivo que resuma o que sinto.")
              .changeDeleteSpeed(10)
              .pauseFor(10000)
              .deleteChars(209)
              .changeDeleteSpeed("natural")
              .typeString("é que eu te amo imensamente!")
              .typeString("<br></br>")
              .typeString("<br></br>")
              .typeString("<br></br>")
              .typeString("Eu nunca tinha imaginado o amor. Não tinha expectativas. Amei como uma criança e, depois, amei você. Eu me proibia de amar, até que não me proibi mais.")
              .typeString(" Você abriu as portas do meu coração e me deu a segurança que eu precisava.")
              .typeString(" Acho que encontrei tantas coisas em você, tantas respostas para tantas dores e angústias.")
              .typeString(" Você foi a cura da minha alma.")
              .typeString(" Eu te amo tanto que seria capaz de ir até o fim do mundo e voltar, só para te provar isso.")
              .typeString(" Talvez eu não seja tão bom com os momentos do jeito que você queria. Não atrelo o meu amor por você apenas às minhas atitudes.")
              .typeString(" Acho que existe o místico de você ser aquilo que eu procurava, mesmo sem saber.")
              .typeString(" Um amor verdadeiro, algo que eu sentisse de verdade, que eu quisesse, desejasse e me comprometesse a amar.")
              .typeString(" Vejo em você nada mais, nada menos, do que a própria razão da minha sede de vida.")
              .typeString(" Enquanto houver vida dentro de mim, haverá nós.")
              .typeString(" Por isso, desculpa toda essa 'bobeira' de não conseguir dizer o porquê te amo, sem dizer o porquê de nos amar.")
              .typeString(" Então, mesmo que não entenda, mesmo que me doa, não desista do meu amor, pois ele é grande demais.")
              .pauseFor(5000)
              .typeString("Você é a minha luz, a minha vida. Eu te amo.")
              .pauseFor(5000)
              .typeString(" Eu te amo imensamente!")
              .typeString("<br></br>")
              .typeString("<br></br>")
              .typeString("<br></br>")
              .typeString("Desculpa pelos erros. É difícil escrever tudo isso aqui!")
              .typeString("<br></br>")
              .typeString('De: <span class="font-style text-3xl">João Gabriel (amor da sua vida)</span> Para: <span class="font-style text-3xl">Thauane (amor da minha vida)</span>')
              .start();
          }}
        />
      </p>
    </div>
  );
};

export default Typewriter;
