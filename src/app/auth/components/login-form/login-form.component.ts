import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { LogIn } from 'src/app/auth/state/auth.actions';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.minLength(2), Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private _store: Store<AppState>,
    private authSrv: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this._store.dispatch(
      LogIn({
        email: this.form.get('email')!.value,
        password: this.form.get('password')!.value,
      })
    );
    /* this.authSrv
      .login()
        .pipe(map((data) => {
          localStorage.setItem('access_token',data.data.access_token);
          localStorage.setItem('expires',Date.now()+data.data.expires);
          localStorage.setItem('refresh_token',data.data.refresh_token);
        }),
        switchMap(()=> {
          return this.authSrv.me()
        }))
        .subscribe({
          next: (response) => {
            this.toastr.success('Vous êtes connecté(e) !', 'Succès !',{positionClass : 'toast-bottom-full-width', closeButton : true});
            this.router.navigate(['']);
          },
          error: (e) => this.toastr.error(e.message, 'Erreur 😥'),
          complete: () => {},
        });*/
  }
}
