import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../services/data.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [ DataService ]
})
export class CustomerComponent implements OnInit {

  //public customer : Customer;
  public customers : Customer[];

  // Get Articles from HTTP
  public customer;
  public confirm;

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    
  }

  ngOnInit() {
    this._dataService.getCustomers().subscribe(
      result => {
        this.customers = result;
        console.log(this.customers);
      },
      error => {
        var err = <any>error;
        console.log(err);
      }
    );
  }

  deleteConfirm(id:number) {
    this.confirm = id;
  }

  cancelConfirm() {
    this.confirm = null;
  }

  onDeleteCustomer(id:number) {
    alert("Customer with id: " + id);
    this._dataService.deleteCustomer(id).subscribe(
      response => {
        alert('Customer has been removed successfully');
        this._router.navigate(['/home']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
