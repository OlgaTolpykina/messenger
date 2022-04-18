import { BaseConversationModel } from 'src/app/chat/models/conversation.model';

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
})
export class ConversationListComponent {
  searchTerm: string = '';

  @Input() list: BaseConversationModel[] = [];

  @Input() selectedConversationId: string | undefined;

  constructor(private router: Router) {}

  onSelectConversation(item: BaseConversationModel) {
    this.router.navigate(['/', 'chat', item.id]);
  }
}
