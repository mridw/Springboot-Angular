import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  data = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private httpClient : HttpClient, private router:Router){}
  public handleSubmit() {
    this.httpClient.post("http://localhost:9000/api/login",this.data.value).subscribe((data:any)=>{
      if(data==true){
        this.router.navigate(['/home']);
      }
      else{
        alert("Wrong Details");
      }
    })
  }
}
