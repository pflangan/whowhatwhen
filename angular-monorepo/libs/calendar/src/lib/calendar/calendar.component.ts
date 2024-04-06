import { Component, Input, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {

    @Input ({required: true}) year!:number;

    ngOnInit(): void {
      
    }
    constructor() {

    }

    daysInMonth(year: number, month: number) : number | string {
      var dt = new Date(year, month, 0);
      
      return dt.getDate();
    }

}
