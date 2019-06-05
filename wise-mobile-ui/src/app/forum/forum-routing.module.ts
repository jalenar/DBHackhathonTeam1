import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ForumComponent } from "./forum.component";


const routes: Routes = [
    { path: "", component: ForumComponent },
    { path: "thread", loadChildren: "./thread/thread.module#ThreadModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ForumRoutingModule { }
