import { identity } from "src/interface/app.interface"

export class Chien {
    nom: string
    age: number

    constructor(identity : identity){
        this.nom = identity.name
        this.age = identity.age
    }

    jeSuis(){
        return "Salut, je suis " + this.nom + " j'ai " + this.age + " ans"
    }
}