export class Poke {
    constructor(name) {
        this.name = name
    }

    async getPoke() {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${this.name}`
            const response = await fetch(url)
            const result = await response.json()

            this.name = result.name
            this.img = result.sprites.front_default
            this.type = result.types[0].type.name
            this.experience = result.base_experience
        } catch (error) {
            console.log(error);
        }
    }
}