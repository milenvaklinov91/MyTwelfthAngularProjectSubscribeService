import { Injectable } from "@angular/core";
import { LogerService } from "./logger.service";

@Injectable() //We use this @Injectable() in service,where we want to inject something,on the receiving service
export class UserService {

  constructor(private logger: LogerService){

  }
  //We need 3 steps to inject a Service to another service
  //1.Create constructor with a paremeter
  //2.Decorate receiving service with @Injectable() decorator
  //3.We need to provide that service(In this case we have to do that in app.component.ts
  //Then call it in AddNewUser method)

  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
     this.logger.LogMessage(name, status);
  }


}
