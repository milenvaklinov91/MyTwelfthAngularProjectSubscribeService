import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/userService';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
  // providers: [UserService] // Override
  //We don't need it,because we already created an instance in the app component,
  //Which is parent of this adduser component
})
export class AdduserComponent implements OnInit {
  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  AddUser(){
    this.userService.AddNewUser(this.username, this.status);
    // console.log(this.userService.users);
  }

}
