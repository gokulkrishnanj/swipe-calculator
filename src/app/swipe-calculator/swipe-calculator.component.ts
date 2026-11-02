import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-swipe-calculator',
  templateUrl: './swipe-calculator.component.html',
  styleUrls: ['./swipe-calculator.component.css']
})
export class SwipeCalculatorComponent implements OnInit , OnDestroy{

  constructor() { }

 currentDateTime: Date = new Date();
private timerId: ReturnType<typeof setInterval> | undefined;

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
  if (this.timerId !== undefined) {
    clearInterval(this.timerId);
  }
  }

}
