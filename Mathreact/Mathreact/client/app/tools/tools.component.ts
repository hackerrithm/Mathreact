import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "my-tools",
    // template: `<h1>Hello {{name}}</h1>`
    templateUrl: "tools.component.html"
})
export class ToolsComponent { name = "Tools"; }