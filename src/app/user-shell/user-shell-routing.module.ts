import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserShellComponent } from './user-shell/user-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UserShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomeModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(m => m.ProfileModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('../privacy/privacy.module').then(m => m.PrivacyModule)
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('../terms/terms.module').then(m => m.TermsModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then(m => m.SettingsModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserShellRoutingModule {}
