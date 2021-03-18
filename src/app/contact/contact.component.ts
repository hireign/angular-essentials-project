import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmails])
      }),
      'courses': new FormArray([])
    });

  }
  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
  onAddCourse() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('courses')).push(control);
  }

  forbiddenEmails(control: FormControl) {
    let email = control.value;
    if (email && email.indexOf("@") != -1) {
      let [_, domain] = email.split("@");
      if (domain == "test.com") {

        return { 'emailIsForbidden': true };

      }
      return null;
    }

  }
}
