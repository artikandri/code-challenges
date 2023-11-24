/*
Visa demo test results (with Angular)
*/

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hours = '00';
  minutes = '00';

  handleHoursUpButtonClick() {
    const hours = (parseInt(this.hours) + 1)
    this.hours = hours <= 23 ? String(hours).padStart(2, '0') : '00';
  }

  handleHoursDownButtonClick() {
    const hours = (parseInt(this.hours) - 1)
    this.hours = hours >= 0 ? String(hours).padStart(2, '0') : '23';
  }

  handleMinutesUpButtonClick() {
    const minutes = (parseInt(this.minutes) + 1)
    this.minutes = minutes <= 59 ? String(minutes).padStart(2, '0') : '00';
  }

  handleMinutesDownButtonClick() {
    const minutes = (parseInt(this.minutes) - 1)
    this.minutes = minutes >= 0 ? String(minutes).padStart(2, '0') : '59';
  }
}
