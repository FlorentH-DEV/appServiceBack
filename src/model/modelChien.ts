export class Chien {
    nom: string
    age: number

    constructor(name: string, age: number){
        this.nom = name
        this.age = age
    }

    jeSuis(){
        return "Salut, je suis " + this.nom + " j'ai " + this.age + " ans"
    }
}