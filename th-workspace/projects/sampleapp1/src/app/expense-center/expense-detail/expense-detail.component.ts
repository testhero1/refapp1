import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {
  
  expense$: Observable<Expense>;
  
  
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: ExpenseService
  ) {}
  
  ngOnInit() {
      this.expense$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getExpense(params.get('id')))
      );
  }
  
  gotoExpenseList(expense: Expense){
      let expenseId =   expense? expense.id : null;        
      this.router.navigate(['../', {id: expenseId, foo: 'foo'}], {relativeTo: this.route});
  }
}
