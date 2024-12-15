import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from '../shared/table/table.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },

]

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
      RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
