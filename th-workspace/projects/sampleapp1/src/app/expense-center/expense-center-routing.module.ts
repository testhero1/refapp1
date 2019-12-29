import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseCenterComponent } from './expense-center/expense-center.component';
import { ExpenseCenterHomeComponent } from './expense-center-home/expense-center-home.component';

const expenseCenterRoutes: Routes = [
    {
        path: 'expense-center',
        component: ExpenseCenterComponent,
        children: [
            {
                path: '',
                component: ExpenseListComponent,
                children: [
                    {
                        path: ':id',
                        component: ExpenseDetailComponent
                    },
                    {
                        path: '',
                        component: ExpenseCenterHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(expenseCenterRoutes)],
  exports: [RouterModule]
})
export class ExpensesCenterRoutingModule { }