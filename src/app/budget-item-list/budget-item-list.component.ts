import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>(); // the parent component (the main-page) needs to know what item to delete since we aren't specifically binding to each item

  constructor() {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: BudgetItem): void {
    // Emit an event so the parent component (the main-page) can listen to that event and then delete the appropriate item from the main array
    this.delete.emit(item);
  }
}
