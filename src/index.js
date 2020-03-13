const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let arrayLetters = [];
  expr = expr.split("");
  while (expr.length !== 0) {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push(expr.shift());
    }
    arrayLetters.push(temp);
  }
  return arrayLetters
    .map(function(item) {
      if (item.join("") === "**********") {
        return " ";
      } else {
        let stringLetter = "";
        for (let i = 0; i < 10; i += 2) {
          let tempString = "";
          tempString += item[i];
          tempString += item[i + 1];
          switch (tempString) {
            case "11":
              stringLetter += "-";
              break;
            case "10":
              stringLetter += ".";
              break;
            default:
              break;
          }
        }
        return MORSE_TABLE[stringLetter];
      }
    })
    .join("");
}

module.exports = {
  decode
};
