import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {CalculatorComponent} from "./tools/calculator/calculator.component";
import {ToolsComponent} from "./tools/tools.component";
import { RouterModule }   from "@angular/router";

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, CalculatorComponent, ToolsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }