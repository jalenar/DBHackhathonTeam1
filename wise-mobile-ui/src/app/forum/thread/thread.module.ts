import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { ThreadRoutingModule } from "./thread-routing.module";
import { ThreadComponent } from "./thread.component";
import { ForumService } from "../forum.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ThreadRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ThreadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
    // providers:[ForumService]
})
export class ThreadModule { } 
