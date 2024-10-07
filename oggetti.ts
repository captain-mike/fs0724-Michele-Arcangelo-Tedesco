//oggetti

let pizza:{gusto:string, prezzo:number} = {
    gusto:'Margherita',
    prezzo: 5
}

class Pizza{
    gusto:string = ''
    prezzo:number = 0
}

interface iPizza{
    gusto:string
    prezzo:number
}

type pizzaType = {
    gusto:string, 
    prezzo:number
}

const margherita:Pizza = {
    gusto: "Margherita",
    prezzo: 5
}

const diavola:iPizza = {
    gusto: "Diavola",
    prezzo: 1
}

const capricciosa:pizzaType = {
    gusto: "Diavola",
    prezzo: 1
}