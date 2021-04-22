import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  LoanAmount: number;
  LoanTerm: number;
  InterestRate: number;
  bmiMessage: string;

  constructor(public navCtrl: NavController) {}
  
  calculatePL() {
    this.PL = (this.LoanAmount * this.InterestRate / 100) * this.LoanTerm;
    this.PL = this.LoanAmount +
    this.PL = parseFloat(this.PL.toFixed(2));

  }

}
