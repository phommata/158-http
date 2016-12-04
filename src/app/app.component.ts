import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";
import { Response } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: any[] = [];

  constructor(private httpService: HttpService){

  }

  ngOnInit(){
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

  onSubmit(username: string, email: string){
    this.httpService.sendData({username: username, email: email}).subscribe(data => console.log(data));
  }

  onGetData(){
    this.httpService.getOwnData()
      .subscribe(data => {
        const myArray = [];
        for (let key in data){
          myArray.push(data[key]);
        }
        this.items = myArray;
      });
  }
}
