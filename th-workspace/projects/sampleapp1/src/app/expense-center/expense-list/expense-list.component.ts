import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  selectedId: number;

  
  constructor(
    private service: ExpenseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.expenses$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getExpenses();
      })
    );
  }
}

