import { clearInput, elements } from "./views/base.js";
import { Poke } from "./model/Poke.js";
import * as pokeView from './views/pokeView.js';

const controlData = async (event) => {
    event.preventDefault()
    const input = elements.input.value
    clearInput()
    const poke = new Poke(input)
    await poke.getPoke()
    pokeView.renderPoke(poke)
}

window.addEventListener('submit', controlData)