import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Home Stock';

  constructor(private router: Router, public authSrv: AuthService) {
    this.router.onSameUrlNavigation = 'reload';
  }

  logout() {
    this.authSrv
      .logout()
      .pipe(
        tap(() => {
          location.reload()
        })
      )
      .subscribe();
  }
}
