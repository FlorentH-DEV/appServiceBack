import { Chat } from 'src/model/modelChat';

export class dalChat {
  findAll(){
    return [new Chat({name: "felix", age: 2}), new Chat({name: "plop", age: 20}), new Chat({name: "blop", age: 5}), new Chat({name: "wolverin", age: 200})]
  }
}
