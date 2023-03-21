import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DemoRoutes } from "./demo.routes";
import { VisitorEditComponent } from "./visitor/visitor-edit/visitor-edit.component";
import { VisitorListComponent } from "./visitor/visitor-list/visitor-list.component";
import { VisitorService } from "./visitor/visitor.service";
import { AgGridModule } from 'ag-grid-angular';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from "@angular/material/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { DemoRootComponent } from "./demo-root.component";
import { DemoCommonData } from "./demo-common.data";
import { VisitEditComponent } from "./visit/visit-edit/visit-edit.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseFindByKeyPipeModule } from "@fuse/pipes/find-by-key";
import { FuseNavigationModule } from "@fuse/components/navigation";
import { FuseScrollbarModule } from "@fuse/directives/scrollbar";
import { FuseScrollResetModule } from "@fuse/directives/scroll-reset";
import {CdkTableModule} from '@angular/cdk/table';
import { MatDividerModule } from "@angular/material/divider";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { VisitorSidebarEditEditComponent } from "./visit/visitor-sidebar/visitor-sidebar-edit.component";
import { PrisonerSearch } from "./sheard/prisoner-search/prisoner-search.component";
import { VisitorSearch } from "./sheard/visitor-search/visitor-search.component";
import { PrisonerInfoSidebarEditEditComponent } from "./visit/prisoner-sidebar/prisoner-info-sidebar.component";



@NgModule({
    declarations: [
        VisitorEditComponent,
        VisitorListComponent,
        VisitEditComponent,
        DemoRootComponent,
        VisitorSidebarEditEditComponent,
        PrisonerInfoSidebarEditEditComponent,
        PrisonerSearch,
        VisitorSearch

    ],
    imports: [
        RouterModule.forChild(DemoRoutes),
        FormsModule,
        CommonModule,
        AgGridModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatDatepickerModule,
        MatNativeDateModule,

        MatDialogModule,
        ScrollingModule,
        MatRadioModule,


        MatSnackBarModule,
        MatCardModule,


        //MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatProgressBarModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatSidenavModule,
        FuseFindByKeyPipeModule,
        FuseNavigationModule,
        FuseScrollbarModule,
        FuseScrollResetModule,
        CdkTableModule,
        MatSlideToggleModule,
        
        // MatSidenavContent,
        // MatSidenav

        // NgxMatSelectSearchModule,

        MatDividerModule,

        MatLuxonDateModule,

    ],
    providers: [
        VisitorService,
        DemoCommonData
    ]
})
export class DemoModule {
}