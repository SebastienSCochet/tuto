import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compooo',
  templateUrl: './compooo.component.html',
  styleUrls: ['./compooo.component.css']
})
export class CompoooComponent {
  @Input() idComponent: number = 0;
  @Output() componentSelected = new EventEmitter<number>();

  selectedComponent: number = 0;

 
  selectComponent() {
    this.componentSelected.emit(this.selectedComponent);
  }

}
