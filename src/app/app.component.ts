import { Component,OnInit } from '@angular/core';
import { UserService } from './Services/userService';
import { LogerService } from "./Services/logger.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService,LogerService]
  //We can also provide this LogerService in app.module

})
export class AppComponent {
  title = 'MyTwelfthAngularProjectSubscribeService';

  constructor(private userService: UserService,private loggerService: LogerService){

  }

  users: {name: string, status: string}[]=[];

  ngOnInit(){
   this.users = this.userService.users;
  }
}
