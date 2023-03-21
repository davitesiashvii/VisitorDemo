import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {GridOptions} from "ag-grid-community";
import { DemoCommonData } from "app/demo/demo-common.data";
import { VisitorVm } from "app/demo/models/visitor/visitor-vm";




@Component({
    selector     : 'visitor-list',
    templateUrl  : './visitor-list.component.html',
    
})
export class VisitorListComponent implements OnInit{
    gridApi: any = {};
    gridOptions: GridOptions;
    columnDefs: any[] = [];
    rowData:VisitorVm[] = [];
    rowSelection: 'single' | 'multiple' = 'multiple';

    constructor(
        private readonly _demoCommonData: DemoCommonData,
        private readonly _router: Router,
    ){
        
    }
    
    ngOnInit(): void {
       this._initializeGrid();
       this.rowData = this._demoCommonData.visitors;
       
    }

    newVisitor(){
        this._router.navigate(['visitor/visitor-edit/new']);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.rowData = this._demoCommonData.visitors;
        this.gridApi.sizeColumnsToFit();
    }
   
    private _initializeGrid() {
        this._setGridOptions();
        this._setGridColumns();
    }

    private _setGridOptions() {
        this.gridOptions = {
            pagination: true,
            paginationPageSize: 100,
            cacheBlockSize: 100,
            maxBlocksInCache: 1,
            suppressContextMenu: true,

        };
    }

    onRowDoubleClick($event) {
        this._router.navigate([`visitor/visitor-edit/${$event.data.id}`]);
    }

    private _setGridColumns() {
        this.columnDefs = [
            // {
            //     headerName: '',
            //     field: 'CheckAll',
            //     lockPosition: true,
            //     lockVisible: true,
            //     width: 30,
            //     resizable: false,
            //     suppressMenu: true,
            //     headerCheckboxSelection: false,
            //     headerCheckboxSelectionFilteredOnly: true,
            //     checkboxSelection: true
            // },
            {
                headerName: 'სახელი',
                field: 'firstName',
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
                rowDrag: true,
                
            },
            {
                headerName: 'გვარი',
                field: 'lastName',
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
            },
            {
                headerName: 'მამის სახელი',
                field: 'middleName',
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
            },
            {
                headerName: 'პირადი ნომერი',
                field: 'idNumber',
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
            },           
            {
                headerName: 'სქესი',
                field: 'gender',
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
            },
            {
                headerName: 'დაბადების თარიღი',
                field: 'birthsdate',
                sortable: true,
                resizable: true,
                filter: true,
                floatingFilter: true,
            },
        ];
    } 

}