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

  inputTextValue: string = ''; // Get inpurt text
  Result: string = '';// Calculate result
  ResultNum: number = 0;// Show result
  ShowResult: boolean = false;// Show result element only when availiable
  customDelimiterMatch : boolean= false;// Used to check if custoem delimiter availiable.

  readonly regex = /^(\d+([,\n]\d+)*)$/;


  ngOnInit() {
    this.ShowResult = false;
  }

  checkString(inputString: string): boolean {
    if (this.regex.test(inputString)) {
      return true;
    } else {
      return false;
    }
  }

  add(a: string): any {
    a = a.replaceAll('\\n','\n');
    this.Result = '';
    this.ResultNum = 0;
    let splitted: string[] = [];
    //Check if string is not empty
    if (a.length > 1) {
      if (this.customDelimiterMatch){
        //Code for cutome delimiter
      } else {
        if (this.checkString(a)) {
          // splitted = a.split(','); 
          splitted = a.split(/[,\n]+/);
          // Split String using \n and comma any of this
          splitted.forEach(item => {
            this.ResultNum += parseInt(item);
          });
          this.Result = this.ResultNum.toString();
          this.ShowResult = true;
          return this.Result;
        } else {
          this.Result = 'Invalid String';
          this.ShowResult = true;
          return 'Invalid String';
        }
      }

    }
    //Check if string has only one string
    else if (a.length == 1) {
      this.Result = a;
      this.ShowResult = true;
      return a;
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
