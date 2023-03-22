import { Component, OnInit } from "@angular/core";
import { VisitorService } from "../visitor.service";
import { DemoCommonData } from "app/demo/demo-common.data";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'visitor-edit',
    templateUrl: './visitor-edit.component.html',
    styles: [
        /* language=SCSS */
        `
            .inventory-grid {
                grid-template-columns: 48px auto 40px;

                @screen sm {
                    grid-template-columns: 48px auto 112px 72px;
                }

                @screen md {
                    grid-template-columns: 48px 112px auto 112px 72px;
                }

                @screen lg {
                    grid-template-columns: 48px 112px auto 112px 96px 96px 72px;
                }
            }
        `
    ],
})
export class VisitorEditComponent implements OnInit {

    model: any = {};
    selectedAddress: any = {};


    citizenshipTypes: any[] = [];
    countries: any[] = [];
    regions: any[] = [];
    cities: any[] = [];
    vilages: any[] = [];
    addressTypes: any[] = [];
    visitorButtonText = 'დამატება';
    editMode: boolean = false;
    openAddress: boolean = false;

    addressButtonText = 'განახლება';
    selectedaddressId: number = -1;

    constructor(
        private readonly _visitorService: VisitorService,
        private readonly _demoCommonData: DemoCommonData,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            if (params['visitorId'] !== "new") {
                let id = +params['visitorId'];
                this.model = this._demoCommonData.visitors.find(x => x.id === id);
                this.visitorButtonText = 'განახლება';
                this.editMode = true;
            }
        })


        this.citizenshipTypes = this._demoCommonData.citizenshipTypes;
        this.countries = this._demoCommonData.countries;
        this.regions = this._demoCommonData.regions;
        this.cities = this._demoCommonData.cities;
        this.vilages = this._demoCommonData.vilages;
        this.addressTypes = this._demoCommonData.addressTypes;
        this.selectedAddress.id = 0;
    }

    save(){
        if(this.editMode){
            let index = this._demoCommonData.visitors.findIndex(x => x.id === this.model.id);
            this._demoCommonData.visitors[index] = this.model;
            
        }else{
            this.model.id = 1;
            let items = this._demoCommonData.visitors;
            for(let item of items){
                if(item.id > this.model.id){
                    this.model.id = item.id;
                }
            }
            debugger;
            this.model.birthsDate = new Date(this.model.birthsDate);
            this.model.id++;
            this._demoCommonData.visitors.push(this.model);
        }

        this._router.navigate(['../../'], { relativeTo: this._activatedRoute });

    }

    remove() {
        let index = this._demoCommonData.visitors.findIndex(x => x.id === this.model.id);
        this._demoCommonData.visitors.splice(index, 1);
        this._router.navigate(['../../'], { relativeTo: this._activatedRoute });

    }

    toggleDetails(addressId: string): void {
        debugger;
        if (addressId === this.selectedAddress.id) {
            this.selectedaddressId = -1;
            this.selectedAddress = {};
            this.selectedAddress.id = 0;
        }
        else {
            for (let item of this.model.addresses) {
                if (item.id == addressId) {
                    this.selectedAddress = item;
                    this.selectedaddressId = item.id;
                }
            }
            this.addressButtonText = 'განახლება';
        }
    }

    createAddres() {
        debugger;

        this.selectedAddress.id = 1;
        if (this.selectedAddress.typeId)
            this.selectedAddress.typeName = this.addressTypes.find(x => x.id === this.selectedAddress.typeId).name;
        if (this.selectedAddress.countryId)
            this.selectedAddress.countryName = this.countries.find(x => x.id === this.selectedAddress.countryId).name;
        if (this.selectedAddress.regionId)
            this.selectedAddress.regionName = this.regions.find(x => x.id === this.selectedAddress.regionId).name;
        if (this.selectedAddress.cityId)
            this.selectedAddress.cityName = this.cities.find(x => x.id === this.selectedAddress.cityId).name;
        if (this.selectedAddress.vilageId)
            this.selectedAddress.vilageName = this.vilages.find(x => x.id === this.selectedAddress.vilageId).name;

        if (this.model.addresses) {
            for (let item of this.model.addresses) {
                if (item.id > this.selectedAddress.id) {
                    this.selectedAddress.id = item.id;
                }
            }
            this.selectedAddress.id++;
            let index = this.model.addresses.findIndex(x => x.id === 0);

            this.model.addresses[index] = this.selectedAddress;
        }
        else {
            this.model.addresses = []
            this.model.address.push(this.selectedAddress);
        }

        this.addressButtonText = "განახლება"
        this.selectedaddressId = -1;

    }
    newAddres() {

        debugger;
        if (this.model.addresses) {
            let item = this.model.addresses.find(x => x.id == 0);
            if (item) {
                return;
            }
        }
        this.selectedAddress = {
            id: 0
        }
        this.selectedaddressId = 0;
        if (!this.model.addresses) {
            this.model.addresses = [{
                id: 0,
                typeName: "",
                countryName: "",
                regionName: "",
                cityName: "",
                vilageName: ""

            }];
        }
        else {
            this.model.addresses.unshift({
                id: 0,
                typeName: "",
                countryName: "",
                regionName: "",
                cityName: "",
                vilageName: ""
            });
        }

        this.addressButtonText = "დამატება";
    }
    deleteAddress(){
        let index = this.model.addresses.findIndex(x=>x.id == this.selectedAddress.id);
        this.model.addresses.splice(index, 1);
        this.selectedaddressId = -1;
    }

    createProduct() {
        debugger;

    }

}