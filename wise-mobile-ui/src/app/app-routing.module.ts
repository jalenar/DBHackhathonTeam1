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
            { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
            { path: "forum", loadChildren: "~/app/forum/forum.module#ForumModule" },
            { path: "careerAdvise", loadChildren: "~/app/career-advise/career-advise.module#CareerAdviseModule" },
            { path: "topics", loadChildren: "~/app/topics/topics.module#TopicsModule" },
            { path: "quiz", loadChildren: "~/app/quiz/quiz.module#QuizModule" },
            { path: "score", loadChildren: "~/app/score/score.module#ScoreModule" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
