import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomeVal } from '../validations/customVal';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  regForm!: FormGroup;

  constructor(
    private userDataService: UserDataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createRegForm();
  }

  createRegForm() {
    this.regForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      username: new FormControl(null),
    });
  }

  onRegUserForm() {
    let obj: any = this.regForm.value;
    this.userDataService.postUserData(obj).subscribe((user) => {
      console.log(user);
    });

    this.regForm.reset();
    this._router.navigate(['/']);
  }

  get f() {
    return this.regForm.controls;
  }
}
