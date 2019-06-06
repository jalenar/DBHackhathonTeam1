import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CareerAdviseRoutingModule } from "./career-advise-routing.module";
import { CareerAdviseComponent } from "./career-advise.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CareerAdviseRoutingModule
    ],
    declarations: [
        CareerAdviseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CareerAdviseModule { }
