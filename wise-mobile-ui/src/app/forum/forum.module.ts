import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { ForumRoutingModule } from "./forum-routing.module";
import { ForumComponent } from "./forum.component";
import { ForumService } from "./forum.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ForumRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ForumComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [ForumService]
})
export class ForumModule { } 
