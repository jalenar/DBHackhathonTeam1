import { Component, OnInit, Host } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AppComponent } from "../app.component";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(@Host() private parent: AppComponent, private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>this.parent.rootDrawer.nativeElement;
        sideDrawer.showDrawer();
    }

    async onTakeQuiz() {
        this.router.navigate(['app/topics']);
    }
    async onForum() {

        this.router.navigate(['app/forum']);
    }
    async onCareer() {

        this.router.navigate(['app/careerAdvise']);
    }
}
