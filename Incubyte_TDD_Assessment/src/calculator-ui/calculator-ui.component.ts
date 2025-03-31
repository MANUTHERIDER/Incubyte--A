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
  customDelimiterMatch: any = false;// Used to check if custoem delimiter availiable.
  isNegativeFound: any; // Used to check if negative numbers are present in the string.
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

   findNegativeNumbers(SplittedValue: number[]): number[] {
    return SplittedValue.filter(num => num < 0);
}

  add(a: string): any {
    a = a.replaceAll('\\n', '\n');
    this.Result = '';
    this.ResultNum = 0;
    let splitted: string[] = [];
    let delimiter = /,|\n/; // Default delimiters: ',' or '\n'

    //Check if string is not empty
    if (a.length > 1) {
      if (a.startsWith("//")) {
        // const match = a.match(/^\/\/(.+)\n/); // Regex to extract custom delimiter
       //^\/\/(.+)\n(\d+(\1\d+)*)$
        const match = a.match(/^\/\/(.+)\n(\d+(\1\d+)*)$/); // Regex to extract custom delimiter
        if (match) {
          delimiter = new RegExp(match[1]); // Use the captured delimiter
          // a = a.substring(match[1].length); // Remove delimiter declaration
          a= a.substring(a.indexOf('\n'));
          splitted = a.split(delimiter); // Split the string using the determined delimiter
          this.isNegativeFound = this.findNegativeNumbers(splitted.map(item => parseInt(item)));
          if (this.isNegativeFound.length > 0) {
            this.Result = `Negative numbers not allowed: ${this.isNegativeFound.join(', ')}`;
            // this.Result = 'Negative numbers not allowed';
            this.ShowResult = true;
          } else {
            splitted.forEach(item => {
              this.ResultNum += parseInt(item); // Sum up the numbers
            });
            this.Result = this.ResultNum.toString();
            this.ShowResult = true;
            return this.Result;
          }

        } else {
          this.Result = 'Invalid Syntax for Custom Delimiter';
          this.ShowResult = true;
          return 'Invalid Syntax for Custom Delimiter';
        }
      } else if (this.checkString(a)) {
        splitted = a.split(/[,\n]+/); // Split String using , and \n any of this
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
