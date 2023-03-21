import { VisitorVm } from "../models/visitor/visitor-vm";

export class VisitorService{
    visitors: VisitorVm[] = [];

    citizenshipTypes: any[] =[
        {
            id: 1,
            name: "საქართველოს მოქალაქე"
        },
        {
            id: 2,
            name: "სხვა ქვეყნის მოქალაქე"
        },
        {
            id: 3,
            name: "ორმაგი მოქალაქე"
        },
        {
            id: 4,
            name: "მოქალაქეობის არ მქონე"
        }
    ];

    countrys: any[] = [
        {
            id: 1,
            name: "საქართველო",

        },
        {
            id: 2,
            name: "გერმანია",

        },
        {
            id: 3,
            name: "საფრანგეთი"
        }
    ];

    regions: any[] = [
        {
            id: 1,
            name: "ქართლი",
            cityId: 1

        },
        {
            id: 2,
            name: "კახეთი",
            cityId: 1
        },
        {
            id: 3,
            name: "აჭარა",
            cityId: 1
        }
    ];

    cities: any[] = [
        {
            id: 1,
            name: "გორი",
            regionId: 1
        },
        {
            id: 2,
            name: "კასპი",
            regionId: 1
        },
        {
            id: 3,
            name: "ბათუმი",
            regionId: 3
        },
        {
            id: 3,
            name: "გურჯაანი",
            regionId: 2
        },
    ];

    vilages: any[] = [
        {
            id: 1,
            name: "ნიქოზი",
            regionId: 1
        },
        {
            id: 2,
            name: "ხვითი",
            regionId: 1
        },
    ];

    constructor(){

        
    }

    
}