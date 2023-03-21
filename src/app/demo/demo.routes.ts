import { Route } from "@angular/router";
import { DemoRootComponent } from "./demo-root.component";
import { VisitEditComponent } from "./visit/visit-edit/visit-edit.component";
import { VisitorSidebarEditEditComponent } from "./visit/visitor-sidebar/visitor-sidebar-edit.component";
import { VisitorEditComponent } from "./visitor/visitor-edit/visitor-edit.component";
import { VisitorListComponent } from "./visitor/visitor-list/visitor-list.component";


export const DemoRoutes: Route[] = [

    {
        path     : '',
        component: DemoRootComponent,
        children:[
            {
                path     : '',
                component: VisitorListComponent,
            },
            {
                path     : 'visitor-edit/:visitorId',
                component: VisitorEditComponent,
            },
            {
                path     : 'visit-edit',
                component: VisitEditComponent,
                children : [
                    {
                        path         : 'side/:prisonerId',
                        component    : VisitorSidebarEditEditComponent,
                    }
                ]
            },
        ]
    },
];