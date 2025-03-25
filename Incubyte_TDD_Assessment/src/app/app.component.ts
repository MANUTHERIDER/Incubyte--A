import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorUIComponent } from "../components/calculator-ui/calculator-ui.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorUIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Incubyte_TDD_Assessment';
}
