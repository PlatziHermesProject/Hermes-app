import { LayoutComponent } from './pages/layout/components/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
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
        loadChildren: () =>
          import('./pages/feel-bad/feel-bad.module').then(
            (m) => m.FeelBadModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./pages/chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'inbox',
        loadChildren: () =>
          import('./pages/inbox/inbox.module').then((m) => m.InboxModule),
      },
      {
        path: 'write',
        loadChildren: () =>
          import('./pages/write/write.module').then((m) => m.WriteModule),
      },
      {
        path: 'profile',
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
