import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { RegistrationService } from '../registration.service';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  empList = [];

  isRegister;

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
  
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      empName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/admin/), Validators.pattern(/password/)]],
      age: ['', [Validators.required, Validators.max(99)]],
      cNo: ['', [Validators.required]],
      addrr: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bbio: ['']
    });
    this.isRegister = true;

    let y = localStorage.getItem('iden');
    if (this.router.url == "/edit/"+y) {
      let sdat = JSON.parse(localStorage.getItem("emp_data"));
      let y = localStorage.getItem('iden');

      this.registrationForm = this.fb.group({
        empName: [sdat[y].empName, [Validators.required, Validators.minLength(3)]],
        age: [sdat[y].age, [Validators.required, Validators.max(99)]],
        cNo: [sdat[y].cNo, [Validators.required]],
        addrr: [sdat[y].addrr, Validators.required],
        email: [sdat[y].email, [Validators.required, Validators.email]],
        bbio: [sdat[y].bbio]
      });
      this.isRegister=false;
    }

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
  


  yy = localStorage.getItem('iden');
  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onUpdate() {
    
    //console.log(this.yy);
    this.empList.push(this.registrationForm.value);

    for(var i = 0; i < this.empList.length; i++){
      this.sdat[this.yy[i]] = this.empList[i];
    }
    // console.log(this.empList);
    // this.sdat[this.yy] = this.empList;
    // console.log(this.sdat[this.yy]);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
    

  }

  
}
