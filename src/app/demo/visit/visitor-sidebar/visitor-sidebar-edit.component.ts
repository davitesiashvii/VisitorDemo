import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { ActivatedRoute } from "@angular/router";
import { DemoCommonData } from "app/demo/demo-common.data";
import { DateTime } from "luxon/src/datetime";


@Component({
    selector: 'visitor-sidebar-edit',
    templateUrl: './visitor-sidebar-edit.component.html',
   
})
export class VisitorSidebarEditEditComponent implements OnInit {

    prisoner: any = {};
    mein: string ='';

    constructor(
        private readonly _demoCommonDate: DemoCommonData,
        private readonly _router:  ActivatedRoute,

    ){}

    ngOnInit(): void {

        console.warn("2434");
        this._router.params.subscribe(params => {
            if(params['prisonerId']){
                let id = +params['prisonerId'];
                this.prisoner = this._demoCommonDate.prisoners.find(x=>x.Id === id);
            }  
        })
        //this.prisoner = this._demoCommonDate.prisoners[0];
        debugger;
        this.mein = this.prisoner.FirstName + ", " + this.prisoner.LastName + ", " + this.prisoner.MiddleName + ".";   
        console.warn(this.prisoner);  
    }
}