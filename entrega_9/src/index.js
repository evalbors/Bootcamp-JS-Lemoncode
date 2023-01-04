import "./styles.css";
import * as DataCharacters from "./data.js";
import * as Utils from "./utils.js";

DataCharacters.getCharacters().then(characters => {
  const nodes = [];
  const characterList = characters.results;
  console.log(characters.results);

  for (let character of characterList) {
    const node = Utils.createCharacterRow(character);
    nodes.push(node);
  }

  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
