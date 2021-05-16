import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@Auth/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
    private readonly snackBack: SnackbarService,
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form);
    this.authenticationService.login(this.form.value).subscribe(
      (res: any) => {
        this.authenticationService.setToken(res?.access_token);
        this.router.navigate(['/private']);
      },
      (err: any) => this.snackBack.error(err.error.message),
    );
  }
}
