import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

// ModuleでimportしたFormを画面上で使うためにComponentで定義するためにbuildして作る
//   constructorの中に使いたい機能を定義
export class CreateComponent implements OnInit {
  form = this.fb.group({
    name: [
      '',
      [
        // Validators.requiredで必須入力となる
        Validators.required,
        // .maxLengthで最大文字数を定義する
        Validators.maxLength(40)
      ]
    ]
    // gender: ['', [
    //   Validators.required,
    //   Validators.pattern(/male|female/)
    // ]],
    // email: ['', [
    //   Validators.required,
    //   Validators.email
    // ]]
  });

  // エラーの内容を表示させる:create.html15,16
  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.nameControl.markAsTouched();
  }

  ngOnInit() {}

  submit() {
    // formの中身を表示
    console.log(this.form.value);
  }
}
