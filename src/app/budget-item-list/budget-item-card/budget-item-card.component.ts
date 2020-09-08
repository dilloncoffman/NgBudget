import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<void> = new EventEmitter<void>(); // set type to void since you won't be sending any data at all - the parent component already knows what item to delete because they are passing the item to this component as well as binding to the click event
  @Output() cardClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onXButtonClick(): void {
    // Here we want to emit an event to delete a specific item - don't have to emit anything
    this.xButtonClick.emit();
  }

  onCardClick(): void {
    // Emit an event
    this.cardClick.emit();
  }
}
