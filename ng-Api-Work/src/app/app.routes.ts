import { Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

export const routes: Routes = [
    {
        path: "",
        component: AddproductComponent
    },
    {
        path: "update/:id",
        component: UpdateproductComponent
    }
];
