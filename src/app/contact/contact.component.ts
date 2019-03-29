import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public title = "Contact Page";
  public parameter;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      // id is the parameter assigned in routing.ts
      this.parameter = params['id'];
      console.log(params);
    })
    $('#comments').hide();
    $('#confirmation').hide();
  }

  redirection() {
    this._router.navigate(['/contact','carlosmdelc']);
  }

  sendInfo() {
    console.log("click");

    $('#_name').text($('#name').val());
    $('#_email').text($('#email').val());
    $('#_phone').text($('#phone').val());
    $('#_comment').text($('#comment').val());

    $('#comments').show();
  }

  hideCommentDiv() {
    $('#comments').hide();
    $('#confirmation').show();
    $('#confirmation').hide(9000);

    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#comment').val('');
    //this._router.navigate(['/home']);
  }

}
