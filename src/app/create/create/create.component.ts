/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

// ModuleでimportしたFormを画面上で使うためにComponentで定義するためにbuildして作る
//   constructorの中に使いたい機能を定義
export class CreateComponent implements OnInit {
  hide = true;
  hideConfirm = true;
  form = this.fb.group(
    {
      name: [
        '',
        [
          // Validators.requiredで必須入力となる
          Validators.required,
          // .maxLengthで最大文字数を定義する
          Validators.maxLength(40)
        ]
      ],
      gender: ['', [Validators.pattern(/male|female/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: CustomValidator.matchPassword
    }
  );

  // エラーの内容を表示させる:create.html15,16
  get nameControl() {
    return this.form.get('name') as FormControl;
  }
  get passwordControl() {
    return this.form.get('password') as FormControl;
  }
  get emailControl() {
    return this.form.get('email') as FormControl;
  }
  get confirmPasswordControl() {
    return this.form.get('confirmPassword') as FormControl;
  }

  // 開いたときに最初からエラーとして表示させる
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.nameControl.markAsTouched();
  }

  ngOnInit() {}

  submit() {
    // formの中身を表示
    console.log(this.form.value);
  }

  create() {
    this.authService.createUser(this.form.value);
  }
}

export class CustomValidator {
  static matchPassword(ac: AbstractControl) {
    const password = ac.get('password').value;
    const passwordConfirm = ac.get('confirmPassword').value;
    if (password !== passwordConfirm) {
      ac.get('confirmPassword').setErrors({ notMatchPassword: true });
    }
  }
}
