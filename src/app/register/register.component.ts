import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstname: string ='';
  lastname: string ='';
  email: string = '';
  password: string = '';
  message: string = '';
  phonenumber:string = '';
  constructor(private authService: AuthService) {}
  onSubmit() {
    this.authService.register(this.firstname, this.lastname, this.email, this.password, this.phonenumber)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Registration successful!';
        },
        error => {
         console.log(error);
          this.message = 'Something Wrong.';
        });
  }
}
