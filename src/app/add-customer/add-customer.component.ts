import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../services/data.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  providers: [ DataService ]
})
export class AddCustomerComponent implements OnInit {

  public customer:Customer;
  public btn_message:string = "Add information";
  public isChecked = true;

  constructor(
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.customer = new Customer('','','','','','','','','','',false,false);
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.customer);
    
    this._dataService.addCustomer(this.customer).subscribe(
      result => {
        console.log(result.code);
          alert('Customer has been created successfully');
          this._router.navigate(['customer']);
      },
      error => {
        var err = <any>error;
        console.log(error);
      }
    );
    
  }

}
