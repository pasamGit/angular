import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  hide: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,

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
      console.log("response:" + data.msg);

    });

  }

}
