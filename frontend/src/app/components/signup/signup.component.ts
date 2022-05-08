import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    email:null,
    password: null
  }
  constructor(private http:HttpClient) { }

  onSubmit(){
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data =>console.log(data))
  }
  ngOnInit(): void {
  }

}
