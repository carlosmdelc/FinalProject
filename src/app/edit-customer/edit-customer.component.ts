import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../services/data.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-edit-customer',
  //templateUrl: './edit-customer.component.html',
  templateUrl: '../add-customer/add-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
  providers: [ DataService ]
})
export class EditCustomerComponent implements OnInit {
  
  public title:string;
  public customer:Customer;
  public is_edit;

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.title = 'Edit Customer Information';
    //this.customer = new Customer('','','','','','','','','','',false,false);
    this.is_edit = true;
  }

  ngOnInit() {
    //console.log(this.title);

    // Calling method
    this.getCustomer();
  }
  
  getCustomer() {    
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      console.log("Calling getCustomerByID through service ts");

      this._dataService.getCustomerByID(id).subscribe(
        response => {
          console.log("Response...");
          //if (response.code == 200) {
            this.customer = response;
          //} else {            
            console.log(response);
          //}          
        },
        error => {
          console.log(<any>error);
        }
      );
    });
    
  }

  onSubmit() {
      this._route.params.forEach((params:Params) => {
        let id = params['id'];    

      console.log(id, this.customer);
      
      this._dataService.editCustomer(id, this.customer).subscribe(
        result => {
            alert('Customer has been updated successfully');
            this._router.navigate(['/customer']);
        },
        error => {
          var err = <any>error;
          console.log(error);
        }
      ); 
    });
  }
  
}
