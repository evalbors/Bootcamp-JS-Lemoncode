import "./styles.css";
import * as DataCharacters from "./data-business.js";
import * as Utils from "./utils.js";

DataCharacters.getCharacters().then(characters => {
  const nodes = [];
  const characterList = characters.results;
  for (let character of characterList) {
    const node = Utils.createCharacterRow(character);
    nodes.push(node);
    node.addEventListener("click", () => {
      DataCharacters.getCharacterDetail(character.id).then(character => {
        Utils.showCharacter(character);
      });
    });
  }
  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
