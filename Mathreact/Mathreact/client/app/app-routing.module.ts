import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CalculatorComponent} from "./tools/calculator/calculator.component";
import {ToolsComponent} from "./tools/tools.component";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'tools', component: ToolsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }