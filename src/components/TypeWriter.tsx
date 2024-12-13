import Typewritera from "typewriter-effect";

const Typewriter = () => {
  return (
    <div className="basis-10/12">
      <p className="text-thauane-pink">
        <Typewritera
          options={{ loop: false, delay: 40 }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Oi, tudo bem ? ")
              .pauseFor(2500)
              .typeString("Estou aqui fazendo esse teste")
              .deleteChars(10)
              .start();
          }}
        />
      </p>
    </div>
  );
};

export default Typewriter;
