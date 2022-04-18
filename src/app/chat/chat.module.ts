import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatComponent } from './components/chat/chat.component';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

@NgModule({
  declarations: [
    ConversationListComponent,
    ChatComponent,
    ChatMessageComponent,
    ChatPageComponent,
  ],
  imports: [CommonModule, ChatRoutingModule, FormsModule, SharedModule],
  exports: [ConversationListComponent, ChatComponent, ChatMessageComponent],
})
export class ChatModule {}
