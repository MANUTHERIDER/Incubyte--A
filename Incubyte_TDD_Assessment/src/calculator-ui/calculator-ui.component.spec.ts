import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorUIComponent } from './calculator-ui.component';

describe('CalculatorUIComponent', () => {
  let component: CalculatorUIComponent;
  let fixture: ComponentFixture<CalculatorUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorUIComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculatorUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Take empty string as input 
  it('Empty String ', () => {
    const result = component.add('');
    expect(result).toBe('Empty String');
  });

  //Take 1 as input 
  it('One number string', () => {
    // expect(component).toBeTruthy();
    const result = component.add('1');
    expect(result).toBe('1');
  });

  //Take two number as input 
  it('2 numbers String ', () => {
    const result = component.add('1,2');
    expect(result).toBe('3');
  });

  //Take infininte numbers as input 
  it('Infinite numbers string', () => {
    const result = component.add('1,2,3,4,5,6,7,8,9');
    expect(result).toBe('45');
  });
  // Step 2, accepting /n and , as seperators
  it('Check string for valid including only , & next line escape sequence only', () => {
    const result = component.checkString('1,3\n4');
    expect(result).toBe(true);
  });
  it('Split parameter using multiple delimiters', () => {
    const result = component.add('1,3\n4,5\n6');
    expect(result).toBe('19');
  });
  it('Check if only 2 delimeters used ', () => {
    const result = component.add('1,3\n4,5\h6');
    expect(result).toBe('Invalid String');
  });
  // it('Check string to be invalid for any other seperator except for comma and next line escape sequence', () => {
  //   const result = component.checkString('1,3\h4');
  //   expect(result).toBe(true);
  // });

});
