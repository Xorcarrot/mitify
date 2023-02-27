import { PlaceholderNoUserComponent } from './placeholder-no-user/placeholder-no-user.component';
import { ModuleManagerContainerComponent } from './module-manager-container/module-manager-container.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'manager', component: ModuleManagerContainerComponent},
  {path: '', component: PlaceholderNoUserComponent},
  {path: 'user',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
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
