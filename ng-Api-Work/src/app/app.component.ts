import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddproductComponent } from "./addproduct/addproduct.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddproductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-Api-Work';
}
