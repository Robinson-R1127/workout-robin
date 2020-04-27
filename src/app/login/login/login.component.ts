import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  get emailControl() {
    return this.form.get('email') as FormControl;
  }
  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}
}
