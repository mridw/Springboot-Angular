import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private httpClient : HttpClient, private router : Router){}
  handleAlready(){
    this.router.navigate(['/login']);
  }
  public handleSubmit() {
    console.log(this.register.value);
    this.httpClient.post("http://localhost:9000/api/add",this.register.value).subscribe((data:any)=>{
      alert("Registration Successfully !!")
      console.log("Registration Successfully !!")
      
    }, error => {
      console.log(error);
    }
    )
      

  }
}
