import { Component, OnInit } from "@angular/core";
import { DemoCommonData } from "app/demo/demo-common.data";

@Component({
    templateUrl: './prisoner-search.component.html'
})
export class FileUpload implements OnInit {
    model: any = {};
    constructor(
        private readonly _domainCommonData: DemoCommonData
    ){}

    ngOnInit(): void {
       
    }

}