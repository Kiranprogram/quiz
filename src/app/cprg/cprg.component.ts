import { Component } from '@angular/core';

@Component({
  selector: 'app-cprg',
  standalone: true,
  imports: [],
  templateUrl: './cprg.component.html',
  styleUrl: './cprg.component.css'
})
export class CprgComponent {
  marks = 0;
  score = "";
  question1(opt: any) {
    this.marks += parseInt(opt);
  }
  question2(opt: any) {
    this.marks += parseInt(opt);
  }
  question3(opt: any) {
    this.marks += parseInt(opt);
  }
  question4(opt: any) {
    this.marks += parseInt(opt);
  }
  question5(opt: any) {
    this.marks += parseInt(opt);
  }
  result() {
    this.score = "Ur score is "+this.marks+"/5";
  }
  
}
