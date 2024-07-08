import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '@app/modules/chat/chat.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
