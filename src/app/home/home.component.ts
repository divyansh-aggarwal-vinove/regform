import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { RegistrationService } from '../registration.service';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  registrationForm: FormGroup;

  empList = [];

  get empName() {
    return this.registrationForm.get('empName');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get cNo() {
    return this.registrationForm.get('cNo');
  }

  get addrr() {
    return this.registrationForm.get('addrr');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get bbio() {
    return this.registrationForm.get('bbio');

  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      empName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/admin/), Validators.pattern(/password/)]],
      age: ['', [Validators.required, Validators.max(99)]],
      cNo: ['', [Validators.required]],
      addrr: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bbio: ['']
    });

  }

  onSubmit() {
  
    if (localStorage.getItem('emp_data') == null) {
      this.empList.push(this.registrationForm.value);
      localStorage.setItem('emp_data', JSON.stringify(this.empList));
    } 
    
    else {
      const fr = localStorage.getItem("emp_data");
      const sds = JSON.parse(fr);
      for (var i = 0; i < sds.length; i++) {
        this.empList[i] = sds[i];
      }

      this.empList.push(this.registrationForm.value);
      localStorage.setItem('emp_data', JSON.stringify(this.empList));

    }

    this.registrationForm.reset();

    // var yObj = JSON.parse(localStorage.getItem('emp_data'));
    // console.log(yObj);

  }






}
