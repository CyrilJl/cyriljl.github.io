import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieur Mathématiques Appliquées",
          "Développeur Open Source",
          "Passionné de SIG",
          "Passionné de modélisation",
          "Passionné de modélisation météo",
          "Passionné de modélisation climat"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 10,
        pauseFor: 4000
      }}
    />
  );
}

export default Type;
