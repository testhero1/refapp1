import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Expense } from './Expense';
import { Expenses } from './mock-expenses';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {

  constructor(private messageService: MessageService) { }

  getExpenses(): Observable<Expense[]> {
    // TODO: send the message _after_ fetching the expenses
    this.messageService.add('ExpenseService: fetched expenses');
    return of(Expenses);
  }
  
  
  getExpense(id: number | string){
  
    return this.getExpenses().pipe(
    // (+) before `id` turns the string into a number
      map((expenses: Expense[]) => expenses.find(expense => expense.id === +id))
    );
  }
}
