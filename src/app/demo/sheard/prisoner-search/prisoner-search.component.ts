import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DemoCommonData } from 'app/demo/demo-common.data';

interface SearchPrisonersForConfrontationModel {
    idNumber: string,
    firstName: string,
    lastName: string
}

@Component({
    templateUrl: './prisoner-search.component.html'
})
export class PrisonerSearch implements OnInit {
    model: any = {}

    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, { static: true }) private readonly _paginator: MatPaginator;
    readonly displayedColumns: string[];
    searchResults: any = {};

    constructor(private readonly _dialogRef: MatDialogRef<any>,
        private readonly _demoCommonDate: DemoCommonData,) {
        this.model = { idNumber: '', firstName: '', lastName: '' };
        this.displayedColumns = ['firstName', 'lastName', 'idNumber', 'buttons'];
        this.searchResults = [];
    }

    ngOnInit() {
        this.init([]);
    }

    search(value: SearchPrisonersForConfrontationModel) {
        debugger;
        this.searchResults = this._demoCommonDate.prisoners;
        if (value.idNumber.length > 0) {
            this.searchResults = this.searchResults.filter(x => x.privateNumber.includes(value.idNumber));
        }
        if (value.firstName.length > 0) {
            this.searchResults = this.searchResults.filter(x => x.FirstName.includes(value.firstName));
        }
        if (value.lastName.length > 0) {
            this.searchResults = this.searchResults.filter(x => x.LastName.includes(value.lastName));
        }

        this.init(this.searchResults);
    }

    // isValidate(value: SearchPrisonersForConfrontationModel): boolean {
    //     const idNumberIsEmpty = isStringNullOrWhiteSpace(value.idNumber);
    //     const firstNameIsEmpty = isStringNullOrWhiteSpace(value.firstName);
    //     const lastNameIsEmpty = isStringNullOrWhiteSpace(value.lastName);

    //     if (!idNumberIsEmpty) {
    //         return false;
    //     }

    //     return !(!firstNameIsEmpty && !lastNameIsEmpty);
    // }

    private init(data: any) {
        this.dataSource = new MatTableDataSource<any>(data as any);
        this.dataSource.paginator = this._paginator;
    }

    onAdd(prisonerId: number) { 
        debugger;
        this._dialogRef.close(prisonerId);
    }

    // typeToString(type: number): string {
    //     let text = SearchPrisonersResultType.toString(type);
    //     return text;
    // }
}
