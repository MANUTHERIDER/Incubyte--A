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

  it('should create', () => {
    // expect(component).toBeTruthy();
    const result = component.add('2', '3');
    expect(result).toBe(5);

  });
});
