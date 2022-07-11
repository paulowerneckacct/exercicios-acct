import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TextWords = () => {
  const frase = "hello world";
  const [helloTxts, setHelloTxts] = useState([]);

  const UpperCase = () => {
    return frase.toUpperCase();
  };

  const RevertText = () => {
    let reverted = [];
    let i;
    let d;

    for (i = 0, d = frase.length - 1; i < frase.length, d >= 0; d--, i++) {
      reverted[i] = frase[d];
    }

    return reverted.toString().replace(/,/gi, "");
  };

  const AsciiText = () => {
    let asciiTxt = "";
    let i;
    for (i in frase) {
      asciiTxt = asciiTxt + " " + frase[i].charCodeAt(0);
    }
    return asciiTxt;
  };

  const NoVocals = () => {
    let i;
    let noVocalTxt = [];
    for (i in frase) {
      if (
        frase[i] == "a" ||
        frase[i] == "e" ||
        frase[i] == "i" ||
        frase[i] == "o" ||
        frase[i] == "u"
      ) {
        noVocalTxt[i] = "*";
      } else {
        noVocalTxt[i] = frase[i];
      }
    }
    return noVocalTxt.toString();
  };

  useEffect(() => {
    setHelloTxts([
      {
        text: UpperCase(),
      },
      {
        text: RevertText(),
      },
      {
        text: AsciiText(),
      },
      {
        text: NoVocals(),
      },
    ]);
    RevertText();
  }, []);

  return (
    <div>
      {helloTxts.map((helloTxts) => (
        <p key={helloTxts.text}>{helloTxts.text}</p>
      ))}
    </div>
  );
};

export default TextWords;
