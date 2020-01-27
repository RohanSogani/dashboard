import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Validators } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-widget-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  runForm = new FormGroup({
    numberOfNodes: new FormControl('', Validators.required),
    numberOfClients: new FormControl('', Validators.required),
    batchSize: new FormControl('', Validators.required),
  })
  URL = "http://localhost:2000/run";

  constructor(private http: HttpClient) {
  }
  

  ngOnInit() {
  }
  log(x) {
    console.log(x); 
  }

  /* runEvent(event) {
    //call backend
    console.log("Run Clicked");
  } */

  onSubmit() {
    console.log(this.runForm.value);
    this.http.post(this.URL, this.runForm.value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }).subscribe();
    console.log("yay");
  }
}


