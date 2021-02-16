import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';

@NgModule({
  declarations: [UserShellComponent],
  imports: [CommonModule, UserShellRoutingModule]
})
export class UserShellModule {}
