import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent {
  oldItem: BudgetItem;
  newItem: BudgetItem;
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>(); // the parent component (the main-page) needs to know what item to delete since we aren't specifically binding to each item
  // Will need to pass the old and updated items to the main-page component - to do this we can create an interface describing the object we expect to be sent to the main-page
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: BudgetItem): void {
    // Emit an event so the parent component (the main-page) can listen to that event and then delete the appropriate item from the main array
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem): void {
    // Show the edit modal using Angular Material Dialog component
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });

    // Subscribe to event when it's closed
    dialogRef.afterClosed().subscribe((result) => {
      // Check if result (the updated budget item returned from the edit-item-modal component where this.dialogRef.close(updatedItem)) has a value
      if (result) {
        // result is the updated BudgetItem
        // Replace the item with the updated submitted item from the form, but also need to pass the oldItem to determine the totalBudget on the main-page component
        this.update.emit({
          oldItem: item,
          newItem: result,
        });
      }
    });
  }
}
