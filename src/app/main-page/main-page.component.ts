import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // method that will run when the form is submitted, this will catch the emitted event for the formSubmit
  addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem): void {
    // Remove the item from the array
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent): void {
    // Update the budget item itself in the budget list
    this.budgetItems[this.budgetItems.indexOf(updateEvent.oldItem)] =
      updateEvent.newItem;

    // Update the totalBudget to display
    this.totalBudget -= updateEvent.oldItem.amount;
    this.totalBudget += updateEvent.newItem.amount;
  }
}
