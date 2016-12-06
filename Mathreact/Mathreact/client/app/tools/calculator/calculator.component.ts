import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-calculator",
    // template: `<h1>Hello {{name}}</h1>`
    templateUrl: "calculator.component.html"
})
export class CalculatorComponent { name = "Kemar Galloway"; }