import { Injectable } from "@angular/core";

@Injectable()
export class LogerService{

  LogMessage(name: string, status: string){
    console.log('A new user with username "'+name+'" with status '+status+' has been added.');
  }
}
