import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  forgotPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.forgotPasswordForm = this.formBuilder.group({
       email: [null, [Validators.required, Validators.email]]
    });
  }
  forgotPassword() {
    try {
    const forgotData = this.forgotPasswordForm.value;
    console.log('ForgotPaswordData:', forgotData);
    this.service.updatePassword(forgotData).subscribe(
      data => {
        console.log('got response from server', data);
        alert('Password sent! Check your Email');
      },
      error => {
        console.log('error', error);
      }
    );
    } catch (ex) {
        console.log('ex', ex);
      }
  }

}
