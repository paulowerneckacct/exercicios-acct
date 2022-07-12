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
        frase[i] === "a" ||
        frase[i] === "e" ||
        frase[i] === "i" ||
        frase[i] === "o" ||
        frase[i] === "u"
      ) {
        noVocalTxt[i] = "*";
      } else {
        noVocalTxt[i] = frase[i];
      }
    }

    return noVocalTxt.toString().replace(/,/gi, " ");
  };

  const ChangeOrder = () => {
    let i;
    let aux = false;
    let firstTxt = [];
    let secondTxt = [];

    for (i in frase) {
      if (aux === false) {
        firstTxt[i] = frase[i];
      } else {
        secondTxt[i] = frase[i];
      }
      if (frase[i] === " ") {
        aux = true;
      }
    }

    return (secondTxt + " " + firstTxt).toString().replace(/,/gi, "");
  };

  const MorseCode = () => {
    let i;
    let count2;
    let morseCoded = [];
    const morse = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
    };

    for (i in frase) {
      if (frase[i] === " ") {
        morseCoded[i] = "/";
      } else {
        for (count2 in morse) {
          if (frase[i] === count2) {
            morseCoded[i] = morse[count2];
          }
        }
      }
    }

    return morseCoded.toString().replace(/,/gi, " ");
  };

  const RandomCase = () => {
    let randomTxT = [];
    let i;

    for (i in frase) {
      if (frase[i] === " ") {
        randomTxT[i] = frase[i];
      } else {
        if (Math.floor(Math.random(0, 10) * 10) >= 5) {
          randomTxT[i] = frase[i].toUpperCase();
        } else {
          randomTxT[i] = frase[i];
        }
      }
    }

    return randomTxT.toString().replace(/,/gi, "");
  };

  const BinaryText = () => {
    let count1, count2, count3;
    let letterA;
    let binaryTxt = [];
    let repetitions = [];

    for (count1 in frase) {
      letterA = [0, 1, 1, 0, 0, 0, 0, 1];
      repetitions = frase[count1].charCodeAt(0) - "a".charCodeAt(0);

      if (frase[count1] !== " ") {
        for (count2 = 0; count2 <= repetitions - 1; count2++) {
          for (count3 = letterA.length - 1; count3 >= 0; count3--) {
            if (letterA[count3] === 1) {
              letterA[count3] = 0;
            } else {
              letterA[count3] = 1;
              break;
            }
          }
        }
      } else {
        letterA = "00100000";
      }

      binaryTxt[count1] = letterA + " ";
    }

    return binaryTxt.toString().replace(/,/gi, "");
  };

  const HalfUpperCase = () => {
    let Txt1 = frase.slice(0, 5);
    let Txt2 = frase.slice(5, 11);

    return Txt1 + Txt2.toUpperCase();
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
      {
        text: ChangeOrder(),
      },
      {
        text: MorseCode(),
      },
      {
        text: RandomCase(),
      },
      {
        text: BinaryText(),
      },
      {
        text: HalfUpperCase(),
      },
    ]);
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
