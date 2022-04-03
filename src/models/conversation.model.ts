import { ConversationMessageModel } from './message.model';
import { UserModel } from './user.model';

export interface BaseConversationModel {
  id: string;
  participants: UserModel[];
  last_message: ConversationMessageModel;
}

export interface SelectedConversationModel extends BaseConversationModel {
  messages: ConversationMessageModel[];
}

export interface ConversationListResponseModel {
  conversations: BaseConversationModel[];
}
