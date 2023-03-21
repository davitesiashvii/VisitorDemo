import { DOCUMENT } from "@angular/common";
import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDrawer } from "@angular/material/sidenav";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { DemoCommonData } from "app/demo/demo-common.data";
import { PrisonerSearch } from "app/demo/sheard/prisoner-search/prisoner-search.component";
import { DateTime } from "luxon/src/datetime";
import { Subject, takeUntil } from "rxjs";


@Component({
    selector: 'visitor-edit',
    templateUrl: './visit-edit.component.html',

})
export class VisitEditComponent implements OnInit {

    @ViewChild('matDrawer1', { static: true }) matDrawer1: MatDrawer;
    model: any = {};
    visitTypes: any = {};
    drawerMode: 'side' | 'over';
    opened: boolean = false;
    prisoner:any = {};
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    prisonerButtonText: string = "პატიმრის დამატება";
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
    ) { }

    ngOnInit(): void {
        this.model.visitCreateDate = new Date().toDateString();
        this.model.visitNumber = '21456';
        this.model.visitCreator = 'დავით ესიაშვილი';
        this.visitTypes = this._demoCommonDate.visitTypes;

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
            //this.opened = true;
            this.matDrawer1.open();
            this.sidebarOpened = true;
        }
        else{
            this.matDrawer1.close();
            this.sidebarOpened = false;
        }
        
    }

    serchPrisoner(){
        this._matDialog.open(PrisonerSearch, {autoFocus: false})
        .afterClosed()
        .subscribe((result: any | undefined) => {
            debugger;
            this.prisoner = this._demoCommonDate.prisoners.find(x=>x.Id === result);
            this.prisonerButtonText = "პატიმრის შეცვლა";
            //let roteText = '/visitor/visit-edit/side/'+this.prisoner.Id.toString(); 
            this.matDrawer1.close();
            this.sidebarOpened = false;
        })
    }

}
