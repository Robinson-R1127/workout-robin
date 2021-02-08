import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from 'src/app/post-dialog/post-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {}

  openPostDialog() {
    this.dialog.open(PostDialogComponent, {
      width: '500px',
      height: '460px',
      autoFocus: false,
      restoreFocus: false
    });
  }
}
