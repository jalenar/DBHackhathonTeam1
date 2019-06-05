import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { Thread } from "./model/thread";
import { ForumService } from "./forum.service";

@Component({
    selector: "Forum",
    moduleId: module.id,
    templateUrl: "./forum.component.html"
})
export class ForumComponent implements OnInit {

    generic_Tittle = "How do I invest in index funds";
    generic_Description = "I for whatever reason cannot get a solid answer from anyone on how to invest in index funds. What I mean is, how do I allocate my funds? Do I invest 100% of my funds into a fidelity or vanguard index 500...";

    dataItems: Thread[] = [
        new Thread(this.generic_Tittle, this.generic_Description, 5, 2, 3),
        new Thread(this.generic_Tittle, this.generic_Description, 5, 2, 3),
        new Thread(this.generic_Tittle, this.generic_Description, 5, 2, 3),
        new Thread(this.generic_Tittle, this.generic_Description, 5, 2, 3),
        new Thread(this.generic_Tittle, this.generic_Description, 5, 2, 3),
        new Thread(this.generic_Tittle, this.generic_Description, 5, 2, 3),
    ];

    constructor(private routerExtensions: RouterExtensions, private forumService:ForumService) {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log('forum page')
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    onNavItemTap(navItemRoute: string, threadSelected: Thread): void {
        this.forumService.setThread(threadSelected);
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
