import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  hide: boolean = false;
  errorMessage: string = '';
  showError: boolean = false;
  successMessage: string = '';
  showSuccess: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.user = this.loginForm.value;
    this.authService.login(this.user).subscribe(data => {
      console.log("response:" + JSON.stringify(data));
      if (data.status == 200) {
        this.showSuccess = true;
        this.showError = false;
        this.successMessage = data.msg;
        this.router.navigate(['/home']);
      } else if (data.status == 400) {
        this.errorMessage = data.msg;
        this.showSuccess = false;
        this.showError = true;
      }

    }, err => {
      this.errorMessage = err.message;
      this.showError = true;
    });

  }

}
