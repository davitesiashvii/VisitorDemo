import { DOCUMENT } from "@angular/common";
import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDrawer } from "@angular/material/sidenav";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { DemoCommonData } from "app/demo/demo-common.data";
import { PrisonerSearch } from "app/demo/sheard/prisoner-search/prisoner-search.component";
import { VisitorSearch } from "app/demo/sheard/visitor-search/visitor-search.component";
import { VisitorService } from "app/demo/visitor/visitor.service";
import { DateTime } from "luxon/src/datetime";
import { Subject, takeUntil } from "rxjs";


@Component({
    selector: 'visitor-edit',
    templateUrl: './visit-edit.component.html',

})
export class VisitEditComponent implements OnInit {

    @ViewChild('matDrawer1', { static: true }) matDrawer1: MatDrawer;
    @ViewChild('matDrawer2', { static: true }) matDrawer2: MatDrawer;
    model: any = {};
    visitTypes: any = {};
    visitorAndPrisonerConnectionTypes: any[] = [];
    visitLocations: any[] = [];
    visitTimes: any[] = [];
    visitStatuses: any[] = [];
    
    drawerMode: 'side' | 'over';
    drawerMode1: 'side' | 'over';
    visitFreeSpace: number = 4;
    opened: boolean = false;
    opened1: boolean = true;
    prisoner:any = {};
    visitors: any[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    prisonerButtonText: string = "პატიმრის დამატება";
    visitoresButtonText: string = "ვიზიტორის დამატება";
    //prisonerButtonText: string = "პატიმრის დამატება";
    prisonerAdded: boolean = false;
    sidebarOpened: boolean = false;

    constructor(
        private readonly _demoCommonDate: DemoCommonData,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _matDialog: MatDialog,
    ) { 
        _router.events.subscribe((val) => {
            console.warn("musghaobvs");
        });
    }

    ngOnInit(): void {
        this.model.visitCreateDate = new Date().toDateString();
        this.model.visitNumber = '21456';
        this.model.visitCreator = 'დავით ესიაშვილი';
        this.visitTypes = this._demoCommonDate.visitTypes;
        this.visitorAndPrisonerConnectionTypes = this._demoCommonDate.visitorAndPrisonerConnectionTypes;
        this.visitLocations = this._demoCommonDate.visitLocations;
        this.visitTimes = this._demoCommonDate.visitTimes;
        this.visitStatuses = this._demoCommonDate.visitStatuses;
        this.model.freeSpace = 3;


        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode if the given breakpoint is active
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                }
                else
                {
                    this.drawerMode = 'over';
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        this.matDrawer1.openedChange.subscribe((opened) => {
            if ( !opened )
            {
                // Remove the selected contact when drawer closed
                // this.selectedContact = null;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            }
        });
    }

    onBackdropClicked() {
        // Go back to the list
        this._router.navigate(['./'], {relativeTo: this._activatedRoute});

        this._changeDetectorRef.markForCheck();

    }

    open(){
        if(!this.sidebarOpened){
            this.drawerMode = 'side';
            this.opened = true;
           // this.matDrawer1.open();
            this.sidebarOpened = true;
        }
        else{
            this.sidebarOpened = false;
            this.opened = false;
        }
        
    }

    openVisitor(){
        
    }

    serchPrisoner(){
        this._matDialog.open(PrisonerSearch, {autoFocus: false})
        .afterClosed()
        .subscribe((result: any | undefined) => {
            debugger;
            this.prisoner = this._demoCommonDate.prisoners.find(x=>x.Id === result);
            this.prisonerButtonText = "პატიმრის შეცვლა";
            //let roteText = '/visitor/visit-edit/side/'+this.prisoner.Id.toString(); 
            this._router.navigate(['./'], {relativeTo: this._activatedRoute});
            this.matDrawer1.close();
            this.matDrawer2.close();
            
            this.sidebarOpened = false;
        })
    }
    

    serchVisitor(){
        this._matDialog.open(VisitorSearch, {autoFocus: false})
        .afterClosed()
        .subscribe((result: any | undefined) => {
            debugger;
            this.visitors.push(this._demoCommonDate.visitors.find(x=>x.id === result));
            this.visitoresButtonText = "ვიზიტორის შეცვლა";
            this._router.navigate(['./'], {relativeTo: this._activatedRoute});
            this.matDrawer2.close();
            this.matDrawer2.close();
            this.opened1 = true;
            //this.sidebarOpened = false;
        });
    }

    deleteVisitor(id){
        debugger;
        this.visitors = this.visitors.filter(x => x.id !== id);
    }

}
