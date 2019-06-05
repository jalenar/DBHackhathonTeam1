import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "CareerAdvise",
    moduleId: module.id,
    templateUrl: "./career-advise.component.html"
})

export class CareerAdviseComponent implements OnInit {

    dataItems:{index:number, topicName:string, topicDesc:string, topicSubscribers:number} [] = [
        {  
            index:1,
            topicName:"How to budget for 4 year college",
            topicDesc:"Seniors share their experiences & views on financial planning & budgeting",
            topicSubscribers:15
         },
         {  
            index:2,
            topicName:"Banking & Budgeting for teens",
            topicDesc:"Seniors share their experiences & views on financial planning & budgeting ",
            topicSubscribers:12
         },
         {  
            index:3,
            topicName:"Placeholder Title",
            topicDesc:"Placeholder Description",
            topicSubscribers:1
         },
         {  
            index:4,
            topicName:"Placeholder Title",
            topicDesc:"Placeholder Description",
            topicSubscribers:1
         }
    ];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
