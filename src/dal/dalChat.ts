import { Chat } from 'src/model/modelChat';

export class dalChat {
  findAll(){
    return [new Chat("felix", 2), new Chat("plop", 20), new Chat("blop", 5), new Chat("wolverin", 200)]
  }
}
