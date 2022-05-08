import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// method pour recuperer les données du formulaire
  public form ={
    email: null,
    password : null
  };

  public error=null;

  constructor(private http:HttpClient) { }

  onSubmit(){
    console.log(this.form);
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data =>console.log(data),
      error =>this.handleError(error)
    );
  }

  handleError(error:any){
    this.error = error.error.error;

  }
  ngOnInit(): void {
  }

}
