import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "app", component: AppComponent, children: [
            { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
            { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
            { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
            { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
            { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
