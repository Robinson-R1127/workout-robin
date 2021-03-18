import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostDialogComponent } from 'src/app/post-dialog/post-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly MAX_LENGTH = 100;
  readonly MIN_LENGTH = 1;

  form = this.fb.group({
    comment: [
      '',
      [
        Validators.minLength(this.MIN_LENGTH),
        Validators.maxLength(this.MAX_LENGTH)
      ]
    ]
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  // formの中を監視してる状態
  get commentControl(): FormControl {
    return this.form.get('comment') as FormControl;
  }

  post() {
    const commentLength = this.commentControl.value.length;
    if (commentLength > this.MAX_LENGTH) {
      this.snackBar.open('Text string is too long', null, {
        duration: 5000
      });
    }
  }

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
  }

  openPostDialog() {
    this.dialog.open(PostDialogComponent, {
      width: '500px',
      height: '460px',
      autoFocus: false,
      restoreFocus: false
    });
  }
}
