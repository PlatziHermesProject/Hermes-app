import { LayoutComponent } from './pages/layout/components/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full',
      },
      {
        path: 'feel-bad',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/feel-bad/feel-bad.module').then(
            (m) => m.FeelBadModule
          ),
      },
      {
        path: 'chat',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'inbox',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/inbox/inbox.module').then((m) => m.InboxModule),
      },
      {
        path: 'write',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/write/write.module').then((m) => m.WriteModule),
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
