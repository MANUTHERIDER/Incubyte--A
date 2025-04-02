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
export class CalculatorUIComponent {

  inputTextValue: string = ''; // Get input text
  Result: string = ''; // Calculate result
  ResultNum: number = 0; // Show result
  ShowResult: boolean = false; // Show result element only when available
  customDelimiterMatch: any = false; // Used to check if custom delimiter is available.
  isNegativeFound: any; // Used to check if negative numbers are present in the string.
  readonly regex = /^(\d+([,\n]\d+)*)$/;
  private addCallCount: number = 0;

  // Getters and Setters for addCallCount
  getAddCallCount(): number {
    return this.addCallCount;
  }

  setAddCallCount(count: number): void {
    this.addCallCount = count;
  }

  // Check if the input string is valid according to the regex pattern
  checkString(inputString: string): boolean {
    return this.regex.test(inputString);
  }

  // This method is used to find negative numbers in the input string.
  findNegativeNumbers(SplittedValue: number[]): number[] {
    return SplittedValue.filter(num => num < 0);
  }

  // This method is used to add numbers from a string input with support for multiple custom delimiters of any length.
  addWithMultipleDelimiters(a: string): any {
    a = a.replace(/\\n/g, '\n');
    this.Result = ''; // Reset the result
    this.ResultNum = 0; // Reset the result number
    let splitted: string[] = []; // Array to hold the split string values
    let delimiter = /,|\n/; // Default delimiters: ',' or '\n'
    this.setAddCallCount(this.addCallCount + 1); // Increment the call count

    if (a.length > 1) { // Check if string is not empty
      if (a.startsWith("//")) { // Check if string starts with custom delimiter
        const match = a.match(/^\/\/(\[.+\])+\n(.*)$/); // Regex to extract multiple custom delimiters
        if (match) { // Check if match is found
          const delimiters = match[1]
            .slice(1, -1) // Remove the outer brackets
            .split('][') // Split by inner brackets
            .map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')); // Escape special characters
          delimiter = new RegExp(delimiters.join('|')); // Combine delimiters into a single regex
          a = match[2]; // Extract the actual numbers part
          splitted = a.split(delimiter); // Split the string using the custom delimiters
          this.isNegativeFound = this.findNegativeNumbers(splitted.map(item => parseInt(item)));
          if (this.isNegativeFound.length > 0) {
            this.Result = `Negative numbers not allowed: ${this.isNegativeFound.join(', ')}`;
            this.ShowResult = true;
          } else {
            splitted.forEach(item => {
              if (parseInt(item) <= 1000) {
                this.ResultNum += parseInt(item); // Sum up the numbers
              }
            });
            this.Result = this.ResultNum.toString();
            this.ShowResult = true;
            return this.Result;
          }
        } else {
          this.Result = 'Invalid Syntax for Custom Delimiters';
          this.ShowResult = true;
          return 'Invalid Syntax for Custom Delimiters';
        }
      } else if (this.checkString(a)) {
        splitted = a.split(/[,\n]+/); // Split string using ',' or '\n'
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
    } else if (a.length == 1) { // Check if string has only one character
      this.Result = a;
      this.ShowResult = true;
      return a;
    } else { // String is empty
      this.Result = 'Empty String';
      this.ShowResult = true;
      return 'Empty String';
    }
    return parseInt(this.Result);
  }
}
