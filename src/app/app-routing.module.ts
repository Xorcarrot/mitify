import { PlaceholderNoUserComponent } from './placeholder-no-user/placeholder-no-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/**
 * beide Routes. student und manager
 */
const routes: Routes = [
  { path: '', component: PlaceholderNoUserComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./manager/manager.module').then((m) => m.ManagerModule),
  },
];

/**
 * Router der das navigieren zu den beiden Modulen ermöglicht
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
