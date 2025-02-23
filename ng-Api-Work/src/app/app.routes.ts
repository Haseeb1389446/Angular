import { Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { GetproductComponent } from './getproduct/getproduct.component';

export const routes: Routes = [
    {
        path: "",
        component: GetproductComponent
    },
    {
        path: "add",
        component: AddproductComponent
    },
    {
        path: "update/:id",
        component: UpdateproductComponent
    }
];
