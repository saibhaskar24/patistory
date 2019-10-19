import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' },
  { path: 'prescription', loadChildren: './prescription/prescription.module#PrescriptionPageModule' },
  { path: 'tests', loadChildren: './tests/tests.module#TestsPageModule' },
  { path: 'visits', loadChildren: './visits/visits.module#VisitsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
