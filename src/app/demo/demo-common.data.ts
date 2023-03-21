import { VisitorVm } from "./models/visitor/visitor-vm";

export class DemoCommonData {

    prisoners: any[] = [
        {
            Id: 1,
            FirstName: "გიორგი",
            LastName: "კობაიძე",
            privateNumber: "12342432",

            MiddleName: "ბესო",
            Nickname: "გკ",
            Gender: "მამრი",
            Birthdate: '23/12/2016',
            MaritalStatus: "დაოჯახებული"
        },
        {
            Id: 2,
            FirstName: "ლევან",
            LastName: "ესიაშვილი",
            privateNumber: "1236768456",

            MiddleName: "გელა",
            Nickname: "ესია",
            Gender: "მამრი",
            Birthdate: '23/12/2016',
            MaritalStatus: "დაოჯახებული"
        },
        {
            Id: 3,
            FirstName: "ლაშა",
            LastName: "დვალი",
            privateNumber: "156752",

            MiddleName: "გურამი",
            Nickname: "ჩორნი",
            Gender: "მამრი",
            Birthdate: '23/12/2016',
            MaritalStatus: "დაოჯახებული"
        },
        {
            Id: 4,
            FirstName: "ავთო",
            LastName: "კუპრაძე",
            privateNumber: "1133432",

            MiddleName: "გიო",
            Nickname: "ბრაძიაგა",
            Gender: "მამრი",
            Birthdate: '23/12/2016',
            MaritalStatus: "დაოჯახებული"
        },
        // {
        //     Id: 2,
        //     FirstName: "დავით",
        //     LastName: "ესიაშვილი",
        //     privateNumber: "12342432",

        //     MiddleName: "ესიაშვილი",
        //     Nickname: "ესიაშვილი",
        //     Gender: "მამრი",
        //     Birthdate: '23/12/2016',
        //     MaritalStatus: "დაოჯახებული"
        // },
        // {
        //     Id: 2,
        //     FirstName: "დავით",
        //     LastName: "ესიაშვილი",
        //     privateNumber: "12342432",

        //     MiddleName: "ესიაშვილი",
        //     Nickname: "ესიაშვილი",
        //     Gender: "მამრი",
        //     Birthdate: '23/12/2016',
        //     MaritalStatus: "დაოჯახებული"
        // },
        // {
        //     Id: 2,
        //     FirstName: "დავით",
        //     LastName: "ესიაშვილი",
        //     privateNumber: "12342432",

        //     MiddleName: "ესიაშვილი",
        //     Nickname: "ესიაშვილი",
        //     Gender: "მამრი",
        //     Birthdate: '23/12/2016',
        //     MaritalStatus: "დაოჯახებული"
        // }
    ];



    visitors: VisitorVm[] = [
        {
            id: 1,
            firstName: "გელა1",
            lastName: "კობაიძე",
            middleName: "ბესო",
            idNumber: "2233445",
            birthsDate: "2/3/12",
            gender: "მამრი",
            privaterNumber: "345545",
            email: "test@gmail.com",
            citizenshipTypeId: 1,
            citizenshipId: 1,
            secondCitizenshipId: 0,
            mobileNumber: 435345,
            addresses: []
        },
        {
            id: 2,
            firstName: "გელა2",
            lastName: "კობაიძე",
            middleName: "ბესო",
            idNumber: "2233445",
            birthsDate: "2/3/12",
            gender: "მამრი",
            privaterNumber: "345545",
            email: "test@gmail.com",
            citizenshipTypeId: 1,
            citizenshipId: 1,
            secondCitizenshipId: 0,
            mobileNumber: 435345,
            addresses: []
        },
        {
            id: 3,
            firstName: "გელა3",
            lastName: "კობაიძე",
            middleName: "ბესო",
            idNumber: "2233445",
            birthsDate: "2/3/12",
            gender: "მამრი",
            privaterNumber: "345545",
            email: "test@gmail.com",
            citizenshipTypeId: 1,
            citizenshipId: 1,
            secondCitizenshipId: 0,
            mobileNumber: 435345,
            addresses: []
        },
        {
            id: 4,
            firstName: "გელა4",
            lastName: "კობაიძე",
            middleName: "ბესო",
            idNumber: "2233445",
            birthsDate: "2/3/12",
            gender: "მამრი",
            privaterNumber: "345545",
            email: "test@gmail.com",
            citizenshipTypeId: 1,
            citizenshipId: 1,
            secondCitizenshipId: 0,
            mobileNumber: 435345,
            addresses: []
        },
        {
            id: 5,
            firstName: "გელა5",
            lastName: "კობაიძე",
            middleName: "ბესო",
            idNumber: "2233445",
            birthsDate: "2/3/12",
            gender: "მამრი",
            privaterNumber: "345545",
            email: "test@gmail.com",
            citizenshipTypeId: 1,
            citizenshipId: 1,
            secondCitizenshipId: 0,
            mobileNumber: 435345,
            addresses: []
        }
    ];

    visitTypes: any[] = [
        {
            id: 1,
            name: "ადვოკატის ვიზიტი"
        },
        {
            id: 2,
            name: "პროკურორის ვიზიტი"
        },
        {
            id: 2,
            name: "სასულიერო პირის ვიზიტი"
        }
    ]

    citizenshipTypes: any[] = [
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

    countries: any[] = [
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

    addressTypes: any[] = [
        {
            id: 1,
            name: "ფაქტიური",
        },
        {
            id: 2,
            name: "იურიდიული",
        },
        {
            id: 3,
            name: "სხვა",
        }
    ]

    visitorAndPrisonerConnectionTypes: any[] = [
        {
            id: 1,
            name: "ადვოკატი",
        },
        {
            id: 2,
            name: "პროკურორი",
        },
        {
            id: 3,
            name: "სასულიერო პირი",
        }
    ]

    visitLocations: any[] = [
        {
            id: 1,
            name: "ბარიერით შეხვედრა",
        },
        {
            id: 2,
            name: "პირდაპირ შეხვედრა",
        }
    ];

    visitTimes: any[] = [
        {
            id: 1,
            name: "10:00",
        },
        {
            id: 2,
            name: "10:30",
        },
        {
            id: 3,
            name: "11:00",
        },
        {
            id: 4,
            name: "10:30",
        },
        {
            id: 5,
            name: "12:00",
        },
        {
            id: 6,
            name: "12:30",
        }
    ]

    visitStatuses: any[] = [
        {
            id: 1,
            name: "დაგეგმილი",
        },
        {
            id: 2,
            name: "გაუქმებული",
        },
        {
            id: 3,
            name: "დაწყებული",
        },
    ]

    constructor() {

        this.visitors.push(

        )
    }



}