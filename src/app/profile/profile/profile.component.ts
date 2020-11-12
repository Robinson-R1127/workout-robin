import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$ = this.authService.afUser$;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
