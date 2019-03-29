import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../models/customer';
import { GLOBAL } from './global';

@Injectable()
export class DataService {

  public name_data = 'New Service';
  public array_services = ['api','soap'];
  public url:string;

  constructor(
    // Inject Http to perform AJAX requests on this class 
    public _http:Http
    // private _http:Http
  ) 
  {
    //this.url = "https://jsonplaceholder.typicode.com/posts";
    // Assign value to url from GLOBAL
    this.url = GLOBAL.url;
  }

  test() {
    return this.name_data;
  }

  test_Param(parameter) {
    return parameter;
  }  

  addService(service_name:string):Array<string> {
    this.array_services.push(service_name);
    return this.getServices();
  }

  getServices():Array<string> {
    return this.array_services;
  }

  deleteService(index:number):Array<string> {    
    this.array_services.splice(index, 1);
    return this.getServices();
  }

  // HTTP
  getTest() {
    return 'Response from DataService';
  }

  getArticles() {
    return this._http.get(this.url)
      .map(res => res.json());
  }

  // Method to add new customer to DB via API
  addCustomer(customer:Customer) {
    let json = JSON.stringify(customer);
    /*let json = JSON.stringify(
      { 
      CompanyName:"First", 
      ContactName:"Second", 
      ContactTitle:"Tres", 
      Address:"Cuatro", 
      Region:"Cinco",
      PostalCode:"Seis",
      City:"Siete",
      Country:"Ocho",
      Phone:"Nueve",
      Fax:"Diez",
      Hired:true,
      Active:true });
      */
    let params = json;
    //let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    console.log("Aplicar headers");
    console.log(params);
    let headers = new Headers({'Content-Type':'application/json'});
    console.log("Headers: " + headers);
    console.log('Calling URL: ' + this.url + 'Customers')
    return this._http.post(this.url + 'Customers', params, {headers:headers})
      .map(response => response.json());
  }

  // Method to get all customers from DB via API
  getCustomers() {
    //let json = JSON.stringify(customer);
    //let params = 'json=' + json;
    //let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    //let headers = new Headers({'Content-Type':'application/text'});

    return this._http.get(this.url + 'Customers')
      .map(response => response.json());
  }

  getCustomerByID (id:number) {
    console.log("Retrieve Customer By ID through WEB API");
    return this._http.get(this.url + 'Customers/' + id)
      .map(response => response.json());    
  }

  editCustomer(id, customer:Customer) {
    let json = JSON.stringify(customer);
    //let params = "json=" + json;
    let params = json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url + 'Customers/' + id, params, {headers:headers})
      .map(response => response.json());
  }

  deleteCustomer (id:number) {
    console.log("Retrieve Customer By ID through WEB API to delete");
    return this._http.delete(this.url + 'Customers/' + id)
      .map(response => response.json());    
  }
}
