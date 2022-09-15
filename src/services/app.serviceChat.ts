import { Injectable } from '@nestjs/common';
import { dalChat } from 'src/dal/dalChat';
import { Chat } from 'src/model/modelChat';

@Injectable()
export class AppServiceChat {
  dalChat = new dalChat()

  getHello(): string {
    let chat = new Chat("jumper", 2)
    return chat.jeSuis();
  }

  getAll(): string {
    // Recherche de tous les chats dans la BDD, pas dans l'exemple
  
    let chats = this.dalChat.findAll()
    let messagesChats : string
    messagesChats = ""
    chats.forEach(chat => {
      messagesChats = messagesChats + chat.jeSuis() + "<br>"
    });
    return messagesChats
  }
}
