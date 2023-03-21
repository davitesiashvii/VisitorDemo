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

    addressButtonText = 'განახლება';

    constructor(
        private readonly _visitorService: VisitorService,
        private readonly _demoCommonData: DemoCommonData,
        private readonly _router:  ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this._router.params.subscribe(params => {
            if(params['visitorId'] !== "new"){
                let id = +params['visitorId'];
                this.model = this._demoCommonData.visitors.find(x=>x.id === id);
            }  
        })
        

        this.citizenshipTypes = this._demoCommonData.citizenshipTypes;
        this.countries = this._demoCommonData.countries;
        this.regions = this._demoCommonData.regions;
        this.cities = this._demoCommonData.cities;
        this.vilages = this._demoCommonData.vilages;
        this.addressTypes = this._demoCommonData.addressTypes;
        this.selectedAddress.id = 0;
        this.model.addresses = [
            {
                id: 1,
                typeId:1,
                typeName: "ფაქტიური",
                countryId: 1,
                countryName: "საქართველო",
                regionId: 1,
                regionName: "ქართლი",
                cityId:1,
                cityName: "გორი",
                vilageId:1,
                vilageName: "ნიქოზი"
            },
            {
                id: 2,
                typeId:1,
                typeName: "ფაქტიური",
                countryId: 1,
                countryName: "საქართველო",
                regionId: 2,
                regionName: "კახეთი",
                cityId:3,
                cityName: "გურჯაანი",
                vilageId:2,
                vilageName: "ხვითი"
            }

        ]
    }

    initModel() {

    }

    toggleDetails(addressId: string): void {
        // if (addressId == this.selectedAddress.id) {
        //     this.selectedAddress.id = -1;
        // }
        // else {
            for (let item of this.model.addresses) {
                if (item.id == addressId) {
                    this.selectedAddress = item;
                }
            }
            this.addressButtonText = 'განახლება';
       /// }
    }
    createProduct() {
        debugger;
        let newId = 1;
        if (this.model.addresses) {
            for (let item of this.model.addresses) {
                if (item.id > newId) {
                    newId = item.id;
                }
            }
            newId++;
        }
    }
    newAddres(){
        this.selectedAddress = {
            id: 0
        }
        this.model.addresses.unshift({
            id: 0,
            typeName: "",
            countryName: "",
            regionName: "",
            cityName: "",
            vilageName: ""
        });
        this.addressButtonText = "დამატება";
    }

}