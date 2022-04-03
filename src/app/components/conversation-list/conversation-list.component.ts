import { Component, EventEmitter, Output } from '@angular/core';
import { conversationListMock } from '@mocks/conversation-list.mock';
import { BaseConversationModel } from '@models/conversation.model';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
})
export class ConversationListComponent {
  list = conversationListMock;

  searchTerm = '';

  selectedConversationId: string = '';

  @Output() selectConversation = new EventEmitter<BaseConversationModel>();

  onSelectConversation(item: BaseConversationModel) {
    this.selectedConversationId = item.id;
    this.selectConversation.emit(item);
  }
}
