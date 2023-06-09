import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input()
  value: 'X' | 'O' = "X";

  @Input()
  disabled: boolean;
}
