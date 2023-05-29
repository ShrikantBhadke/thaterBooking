import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomeVal } from '../validations/customVal';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.createlogInForm();
  }

  createlogInForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onLogInFormSubmit() {
    this._authService.isUserlogIn(
      this.logInForm.value.email,
      this.logInForm.value.password
    );
  }

  get f() {
    return this.logInForm.controls;
  }
}
