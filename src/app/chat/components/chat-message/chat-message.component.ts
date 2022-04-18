import { UserModel } from 'src/app/core/models/user.model';

import { Component, Input } from '@angular/core';

import { ConversationMessageModel } from '../../models/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {
  @Input() message: ConversationMessageModel | undefined;

  @Input() user: UserModel | undefined;

  @Input() currentUser: UserModel | undefined;
}
