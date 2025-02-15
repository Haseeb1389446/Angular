import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private serve: UserService) {}

  UsersData:any;

  ngOnInit(): void {
    this.serve.getAllUsers().subscribe((res)=>{
      // console.log(res);
      this.UsersData = res;
    })
  }
  
}
