import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

import { ExpensesCenterRoutingModule } from './expense-center-routing.module';
import { ExpenseCenterComponent } from './expense-center/expense-center.component';
import { ExpenseCenterHomeComponent } from './expense-center-home/expense-center-home.component';


@NgModule({
  declarations: [
  ExpenseListComponent,
  ExpenseDetailComponent,
  ExpenseCenterComponent,
  ExpenseCenterHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExpensesCenterRoutingModule
  ]
})
export class ExpenseCenterModule { }
