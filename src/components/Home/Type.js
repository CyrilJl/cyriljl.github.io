import React from "react";
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
          "Passioné de météorologie",
          "Passioné de climatologie"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
