import { Component, OnInit, Input, Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {
  // item will get injected through the modal, so don't need an @Input item
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {}

  ngOnInit(): void {}

  onSubmitted(updatedItem: BudgetItem): void {
    // Return the value to the caller of this modal
    // When dialog closes, pass the updateItem to the parent component (the list component)
    this.dialogRef.close(updatedItem);
  }
}
