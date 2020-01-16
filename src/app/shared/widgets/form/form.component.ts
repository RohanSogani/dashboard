import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-widget-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(x) {
    console.log(x); 
  }

  runEvent(event) {
    //call backend
    console.log("Run Clicked");
  }
}
