import { PlaceholderNoUserComponent } from './placeholder-no-user/placeholder-no-user.component';
import { ModuleManagerContainerComponent } from './manager/module-manager-container/module-manager-container.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: PlaceholderNoUserComponent},
  {path: 'user',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
  { path: 'manager', 
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
