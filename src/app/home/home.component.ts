import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  public list_services:Array<string>;
  public service_to_save:string;

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    console.log(this._dataService.test());
    console.log(this._dataService.test_Param('Parametro enviado'));

    this.list_services = this._dataService.getServices();
    console.log("Services available: " + this.list_services);
  }

  AddService() {
    this._dataService.addService(this.service_to_save);
    console.log(this._dataService.getServices());
  }

  deleteFromList(index:number) {
    alert("Going to delete: " + index);
    this._dataService.deleteService(index);    
  }

}
