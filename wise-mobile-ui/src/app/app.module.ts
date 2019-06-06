import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { MainComponent } from "./maint.component";
import { LoginComponent } from "./login/login.component";
import { FileReaderService } from "./core/fileReader.service";

@NgModule({
    bootstrap: [
        MainComponent
    ],
    imports: [
        LoginModule,
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        MainComponent
    ],
    providers: [
        FileReaderService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
