import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';
import { MismatchValidator } from 'src/app/shared/validators/MismatchValidator';
import { AuthService } from '../../../shared/services/auth.service';

const REGISTER = gql`
  mutation create_users_item($data: create_directus_users_input!) {
    create_users_item(data: $data)
  }
`;
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    language: new FormControl(''),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
    passwordConfirm: new FormControl('', [Validators.required]),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private apollo: Apollo,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form
      .get('passwordConfirm')
      ?.setValidators(
        Validators.compose([
          Validators.required,
          MismatchValidator.mismatch(this.form.get('password')),
        ])
      );
  }

  register(): void {
    this.authSrv.register(this.form.value).subscribe({
      next: (response) => {
        this.toastr.success('Vous pouvez désormais vous connecter', 'Succès !');
        this.router.navigate(['login']);
      },
      error: (e) => this.toastr.error(e.message, 'Erreur 😥'),
      complete: () => {},
    });
  }
}
