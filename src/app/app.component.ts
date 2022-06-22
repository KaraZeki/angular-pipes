import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name!: string;
  date!: string;
  amount!: string;
  height!: string;
  miles!:number;
  onMilesChange(value: Event) {
    var data = (value.target as HTMLInputElement).value;
    this.miles=parseFloat(data);
  }
  onNameChange(value: Event) {
    var data = (value.target as HTMLInputElement).value;
    this.name = data;
  }
  onDateChange(value: Event) {
    var data = (value.target as HTMLInputElement).value;
    this.date = data;
  }
  onAmountChange(value: Event) {
    var data = (value.target as HTMLInputElement).value;
    this.amount = data;
  }
  onHeigtChange(value: Event) {
    var data = (value.target as HTMLInputElement).value;
    this.height = data;
  }
}
