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
    const result = component.addWithMultipleDelimiters('');
    expect(result).toBe('Empty String');
  });

  // Test for checkString method with valid input
  it('Check valid string', () => {
    const isValid = component.checkString('1,2,3\n4');
    expect(isValid).toBe(true);
  });
  //Take 1 as input 
  it('One number string', () => {
    // expect(component).toBeTruthy();
    const result = component.addWithMultipleDelimiters('1');
    expect(result).toBe('1');
  });

  //Take two number as input 
  it('2 numbers String ', () => {
    const result = component.addWithMultipleDelimiters('1,2');
    expect(result).toBe('3');
  });

  //Take infininte numbers as input 
  it('Infinite numbers string', () => {
    const result = component.addWithMultipleDelimiters('1,2,3,4,5');
    expect(result).toBe('15');
  });
  // Step 2, accepting /n and , as seperators
  it('Check invalid string', () => {
    const isValid = component.checkString('1,3\n4');
    expect(isValid).toBe(true);

  });
  it('Split parameter using multiple delimiters', () => {
    const Sum = component.addWithMultipleDelimiters('1,3\n4,5\n6');
    expect(Sum).toBe('19');
  });
  it('Check if only 2 delimeters used ', () => {
    const Sum = component.addWithMultipleDelimiters('1,3\n4,5\h6');
    expect(Sum).toBe('Invalid String');
  });

  // Test for GetCalledCount method
  it('GetCalledCount method', () => { 
    component.addWithMultipleDelimiters('1,2,3');
    component.addWithMultipleDelimiters('4,5');
    const callCount = component.getAddCallCount();
    expect(callCount).toBe(2);
  });

  // Test for setAddCallCount and getAddCallCount methods
  it('setAddCallCount and getAddCallCount methods', () => {
    component.setAddCallCount(5);
    const count = component.getAddCallCount();
    expect(count).toBe(5);
  });

    // Test for increment of addCallCount
    it('Increment addCallCount', () => {  
      component.addWithMultipleDelimiters('1,2,3');
      component.addWithMultipleDelimiters('4,5'); 
      const count = component.getAddCallCount();
      expect(count).toBe(2);
    });

    // Test for custom delimiter of any length
    it('Custom delimiter of any length', () => {
      const result = component.addWithMultipleDelimiters('//[***]\n1***2***3');
      expect(result).toBe('6');
    });

    // Test for multiple custom delimiters of any length
    it('Multiple custom delimiters of any length', () => {
      const result = component.addWithMultipleDelimiters('//[***][%%]\n1***2%%3***4');
      expect(result).toBe('10');
    });

    // Test for numbers greater than 1000 with custom delimiter of any length
    it('Numbers greater than 1000 with custom delimiter of any length', () => {
      const result = component.addWithMultipleDelimiters('//[***]\n1***1001***2');
      expect(result).toBe('3');
    });

    // Test for multiple custom delimiters
    it('Multiple custom delimiters', () => {
      const result = component.addWithMultipleDelimiters('//[*][%]\n1*2%3');
      expect(result).toBe('6');
    });

    // Test for multiple custom delimiters with length longer than one character
    it('Multiple custom delimiters with length longer than one character', () => {
      const result = component.addWithMultipleDelimiters('//[**][%%]\n1**2%%3');
      expect(result).toBe('6');
    });

    // Test for multiple custom delimiters with length longer than one character and numbers greater than 1000
    it('Multiple custom delimiters with length longer than one character and numbers greater than 1000', () => {
      const result = component.addWithMultipleDelimiters('//[**][%%]\n1**1001%%3');
      expect(result).toBe('4');
    });

    // Test for invalid syntax with multiple custom delimiters of length longer than one character ---
    it('Invalid syntax with multiple custom delimiters of length longer than one character', () => {
      const result = component.addWithMultipleDelimiters('//[**][%%]\n1**2%3');
      expect(result).toBe('Invalid String');
    });
    
});
