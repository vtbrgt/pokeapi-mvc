import { elements } from "./base.js";

export const renderPoke = ({name, img, type, experience}) => {
    const markup = `
        <h2>Nome: ${name.toUpperCase()}</h2>
        <img src="${img}">
        <p>Tipo: ${type.toUpperCase()}</p>
        <p>Experiência base: ${experience}</p>
    `

    elements.result.insertAdjacentHTML('afterbegin', markup)
}