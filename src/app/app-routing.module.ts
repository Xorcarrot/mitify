import { PlaceholderNoUserComponent } from './placeholder-no-user/placeholder-no-user.component';
import { ModuleManagerContainerComponent } from './module-manager-container/module-manager-container.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'student', component: StudentContainerComponent},
  {path: 'manager', component: ModuleManagerContainerComponent},
  {path: '', component: PlaceholderNoUserComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
