import { SelectedConversationModel } from 'src/app/chat/models/conversation.model';
import { UserModel } from 'src/app/core/models/user.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  ConversationMessageModel,
  MessageSendRequestModel,
} from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() selectedConversation: SelectedConversationModel | undefined;

  @Input() currentUser: UserModel | undefined;

  @Output() postMessage = new EventEmitter<MessageSendRequestModel>();

  newMessage: string = '';

  getUser(message: ConversationMessageModel) {
    return this.selectedConversation?.participants.find(
      (user) => user.id === message.sender
    );
  }

  onPostMessage() {
    this.postMessage.emit({
      message: this.newMessage,
      recipient: this.selectedConversation?.participants[1].id || '',
    });
    this.newMessage = '';
  }
}
