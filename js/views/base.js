export const elements = {
    input: document.querySelector('.search'),
    result: document.querySelector('.resultContainer')
}

export const clearInput = () => {
    elements.result.innerHTML = ""
}