import { BaseConversationModel } from 'src/app/chat/models/conversation.model';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: BaseConversationModel[],
    searchTerm: string
  ): BaseConversationModel[] {
    return searchTerm
      ? value.filter((item) =>
          item.participants[1].username
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : value;
  }
}
