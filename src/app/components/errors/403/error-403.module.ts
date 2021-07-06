import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Error403Component } from './error-403.component';

const routes = [
    {
        path: '',
        component: Error403Component
    }
];

@NgModule({
    declarations: [
        Error403Component
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class Error403Module {
}
