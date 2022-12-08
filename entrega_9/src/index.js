import "./styles.css";
import { getName, getImage, getBirthday, getNickname } from "./data.js";
import { createCharacterRow, showCharacter, createParagraph } from "./utils.js";

const printName = () => {
  const data = getName();
  let text = "";
  for (element of data) {
    text = createParagraph(element);
  }
  return text;
};

console.log(printName());
