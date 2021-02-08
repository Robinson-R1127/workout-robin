import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {
  readonly MAX_LENGTH = 500;
  form = this.fb.group({
    card: ['', [Validators.required, Validators.maxLength(this.MAX_LENGTH)]]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
