import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './view/view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: 'login', component:LoginPageComponent},
    {path: 'register', component:RegistrationComponent},
    {path: 'signup', component:SignupComponent},
    {path: '', component:LoginPageComponent},
    {path: 'home', component:ViewComponent}

];