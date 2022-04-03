import { Component, Input } from '@angular/core';
import { currentUserMock } from '@mocks/current-user.mock';
import { ConversationMessageModel } from '@models/message.model';
import { UserModel } from '@models/user.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {
  @Input() message: ConversationMessageModel | undefined;

  @Input() user: UserModel | undefined;

  currentUser = currentUserMock;
}
