import { VisitorAddressVm } from "./visitor-address-vm";

export class VisitorVm{
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    idNumber: string;
    birthsDate:string;
    gender:string;
    privaterNumber: string;
    email: string;
    citizenshipTypeId: number;
    citizenshipId: number;
    secondCitizenshipId: number;
    mobileNumber: Number;
    addresses: VisitorAddressVm[] = [];

    constructor(){
        
    }
}