import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  standalone : true,
  imports : [ReactiveFormsModule,HttpClientModule],
  styleUrl: './login.component.css'
})
export class LoginComponent {
   data = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(private httpClient : HttpClient, private router:Router){}
  handleRegister(){
    this.router.navigate(['/signup']);
  }
  public handleSubmit() {
    console.log(this.data.value);

    this.httpClient.post("http://localhost:9000/api/login",this.data.value).subscribe((data:any)=>{
    if(data==true){
      alert("Login Successfully");
    }
    else{
      alert("Wrong Username/Password");
    }
  })
  }
}
