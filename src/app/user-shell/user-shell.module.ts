import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserShellComponent, HeaderComponent],
  imports: [CommonModule, UserShellRoutingModule, SharedModule]
})
export class UserShellModule {}
