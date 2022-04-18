import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  BaseConversationModel,
  SelectedConversationModel,
} from '../../models/conversation.model';
import { MessageSendRequestModel } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  selectedConversation: SelectedConversationModel | undefined;

  currentUser: UserModel = this.userService.getCurrentUser();

  conversationList: BaseConversationModel[] =
    this.chatService.getConversationList();

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const conversationId = params['id'];

      if (conversationId) {
        this.onSelectConversation(conversationId);
      }
    });
  }

  onSelectConversation(id: string) {
    this.selectedConversation = this.chatService.selectConversation(id);
  }

  onPostMessage(newMessage: MessageSendRequestModel) {
    this.selectedConversation?.messages.push({
      recipient: newMessage.recipient,
      sender: this.currentUser.id,
      timestamp: new Date().toISOString(),
      message: newMessage.message,
      id: '111222',
    });
  }
}
