import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-calculator-ui',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, NgIf],
  templateUrl: './calculator-ui.component.html',
  styleUrl: './calculator-ui.component.css'
})
export class CalculatorUIComponent implements OnInit {
  inputTextValue: string = '';
  Result: string = '';
  ResultNum: number = 0;
  ShowResult: boolean = false;

  ngOnInit() {
    this.ShowResult = false;
  }
  
  checkString(inputString:string):boolean{
    return false;
  }

  add(a: string): any {
    this.Result = '';
    this.ResultNum = 0;
    let splitted: string[] = [];
    //Check if string is not empty
    if (a.length > 1) {
      splitted = a.split(',');
      // Split String using \n and comma any of this
      splitted.forEach(item => {
        this.ResultNum += parseInt(item);
      });
      this.Result = this.ResultNum.toString();
      this.ShowResult = true;
    }
    //Check if string has only one string
    else if (a.length == 1) {
      this.Result = a;
      this.ShowResult = true;
    }
    //String is empty
    else {
      this.Result = 'Empty String';
      this.ShowResult = true;
      return 'Empty String';
    }
    // console.log(this.inputTextValue);
    // console.log(`Entered String ${a}`);
    // console.log(`Splitted String ${splitted} ${typeof splitted}`);
    return parseInt(this.Result);
  }
}
