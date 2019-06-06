import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
// import { registerElement } from 'nativescript-angular/element-registry';
// import { CardView } from 'nativescript-cardview';
// registerElement('CardView', () => CardView);
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ForumService } from "../forum.service";
import { CommentObj } from "../model/comments";

@Component({
    selector: "Thread",
    moduleId: module.id,
    templateUrl: "./thread.component.html"
})
export class ThreadComponent implements OnInit {

    dataItems: CommentObj[] = [];

    constructor(private routerExtensions: RouterExtensions, private forumService:ForumService) {
        console.log('thread is: ' + forumService.thread.title);
        // 
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        var comment = 'Here is a comment';
        var generic_Comment: CommentObj = new CommentObj(comment, [new CommentObj(comment, []), new CommentObj(comment, [])])
        this.dataItems.push(generic_Comment);
        this.dataItems.push(generic_Comment);
        this.dataItems.push(generic_Comment);
        this.dataItems.push(generic_Comment);
        this.dataItems.push(generic_Comment);
        this.dataItems.push(generic_Comment);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onGoBack(){
        this.routerExtensions.back();
    }

}
