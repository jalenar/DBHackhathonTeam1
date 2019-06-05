import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CareerAdviseComponent } from "./career-advise.component";

const routes: Routes = [
    { path: "", component: CareerAdviseComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CareerAdviseRoutingModule { }
