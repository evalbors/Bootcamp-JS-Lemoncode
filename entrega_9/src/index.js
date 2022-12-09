import "./styles.css";
import * as DataCharacters from "./data.js";
import * as Utils from "./utils.js";

DataCharacters.getCharacters().then(elements => {
  elements.forEach(element => {
    const character = Utils.createCharacterRow(element);
    nodes.push(character);
  });
  document.getElementById("character-detail").append(node);
});

/* 
SEGUNDO INTENTO
DataCharacters.getCharacters().then(elements => {
  const nodes = [];
  for (let element of elements) {
    const character = Utils.createCharacterRow(element);
    nodes.push(character);
  }
  for (let node of nodes) {
    console.log("hola");
    document.getElementById("character-detail").append(node);
  }
}); */
